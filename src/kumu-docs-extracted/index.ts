type Effect = (element: HTMLElement) => any
type Transform = (value: string | boolean, utils: TransformUtils) => string
type TransformUtils = {
  checkmark: '<i class="fa fa-check"></i>',
}

const defaultTransform: Transform = innerHTML => `${innerHTML}`
const defaultEffect: Effect = () => {}

const transformUtils = {
  checkmark: '<i class="fa fa-check"></i>' as const,
}

export function appendTable(
  { id, reference }: {
    id: string,
    reference: { [field: string]: string | boolean }[]
  },
  { transforms, effects }: {
    transforms?: {
      [field: string]: Transform,
    },
    effects?: {
      table?: Effect,
      tbody?: Effect,
      thead?: Effect,
      trHead?: Effect,
      tr?: Effect,
      th?: {
        [field: string]: Effect,
      },
      td?: {
        [field: string]: Effect,
      },
    },
  }
) {
  const fields = Object.keys(reference[0]),
        normalFields = fields.filter(field => !field.startsWith('INFO')),
        infoFields = fields.filter(field => field.startsWith('INFO')),
        ensuredTransforms = {
          ...toDefaultCallbacksByField({ normalFields, defaultCallback: transforms?.DEFAULT || defaultTransform }),
          ...transforms,
        },
        ensuredEffects = {
          table: defaultEffect,
          tbody: defaultEffect,
          thead: defaultEffect,
          trHead: defaultEffect,
          tr: defaultEffect,
          ...effects,
          th: {
            ...toDefaultCallbacksByField({ normalFields, defaultCallback: effects?.th?.DEFAULT || defaultEffect }),
            ...(effects?.th || {})
          },
          td: {
            ...toDefaultCallbacksByField({ normalFields, defaultCallback: effects?.td?.DEFAULT || defaultEffect }),
            ...(effects?.td || {})
          },
        },
        table = document.getElementById(id),
        tbody = document.createElement('tbody'),
        thead = document.createElement('thead'),
        trHead = document.createElement('tr')

  ensuredEffects.table(table)
  ensuredEffects.tbody(tbody)
  ensuredEffects.thead(thead)
  ensuredEffects.trHead(trHead)
        
  for (const field of normalFields) {
    const th = document.createElement('th')
    th.textContent = field
    ensuredEffects.th[field](th)

    trHead.appendChild(th)
  }

  if (infoFields.length > 0) {
    const th = document.createElement('th')
    trHead.appendChild(th)
  }

  thead.appendChild(trHead)

  for (const item of reference) {
    const tr = document.createElement('tr')
    ensuredEffects.tr(tr)

    for (const field of normalFields) {
      const td = document.createElement('td')
      ensuredEffects.td[field](td)
      td.innerHTML = ensuredTransforms[field](item[field], transformUtils)

      tr.appendChild(td)
    }

    if (infoFields.length > 0) {
      const td = document.createElement('td'),
            description = item['INFO Description'],
            validValues = `${item['INFO Valid values']}`
              .split('|')
              .map(validValue => `<code>${validValue}</code>`)
              .join('<br>')

      td.innerHTML = `<i class="fa fa-info-circle" data-placement="left" data-html="true" title="${description} <br>${validValues}">  </i>`

      tr.appendChild(td)
    }


    tbody.appendChild(tr)
  }

  table.appendChild(thead)
  table.appendChild(tbody)
}

function toDefaultCallbacksByField<Callback> ({ normalFields, defaultCallback }: { normalFields: string[], defaultCallback: Callback }): { [field: string]: Callback } {
  return normalFields.reduce((defaultCallbacks, field) => {
    defaultCallbacks[field] = defaultCallback
    return defaultCallbacks
  }, {})
}
