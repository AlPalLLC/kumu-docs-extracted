import { appendTable, appendSearchBox } from './kumu-docs-extracted'
import { selectorReference } from './selectorReference'
import { staticControlsReference } from './staticControlsReference'
import { interactiveControlsReference } from './interactiveControlsReference'
import { settingsReference } from './settingsReference'
import { propertyReference } from './propertyReference'

const table = document.createElement('table')
table.id = 'settings-reference'
document.body.appendChild(table)

appendTable(
  { id: 'settings-reference', reference: settingsReference },
  {
    transforms: {
      'Possible values': values => 
        Array.isArray(values) 
          ? values.map(value => `<div><code>${value}</code></div>`).join('')
          : `${values}`
    },
    effects: {
      th: {
        DEFAULT: th => th.classList.add('text-center'),
        Property: th => th.classList.add('text-left'),
      }
    }
  }
)

appendSearchBox(
  { id: 'settings-reference', hasInfo: true }
)
