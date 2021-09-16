import { appendTable, appendSearchBox } from './kumu-docs-extracted'
import { selectorReference } from './selectorReference'
import { staticControlsReference } from './staticControlsReference'
import { propertyReference } from './propertyReference'

const table = document.createElement('table')
table.id = 'property-reference'
document.body.appendChild(table)

appendTable(
  { id: 'property-reference', reference: propertyReference },
  {
    transforms: {
      DEFAULT: (value, { checkmark }) => value === true ? checkmark : `${value}`,
    },
    effects: {
      table: table => table.classList.add('table', 'borderless', 'property-reference'),
      th: {
        DEFAULT: th => th.classList.add('text-center'),
        'Property': th => th.classList.add('text-left'),
      }
    }
  }
)

appendSearchBox(
  { id: 'property-reference', hasInfo: true }
)
