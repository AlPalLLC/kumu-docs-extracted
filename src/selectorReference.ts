export const selectorReference = [
  {
    'Selector': `&#42;`,
    'What it selects': `All elements, connections, and loops`,
  },
  {
    'Selector': `element`,
    'What it selects': `All elements`,
  },
  {
    'Selector': `connection`,
    'What it selects': `All connections`,
  },
  {
    'Selector': `loop`,
    'What it selects': `All loops`,
  },
  {
    'Selector': `type-slug`,
    'What it selects': `All elements whose element type slug matches <code>type-slug</code>`,
  },
  {
    'Selector': `type-slug-connection`,
    'What it selects': `All connections whose connection type slug matches <code>type-slug</code>`,
  },
  {
    'Selector': `#label-slug`,
    'What it selects': `The item whose label slug matches <code>label-slug</code>. `,
  },
  {
    'Selector': `#assigned-id-slug`,
    'What it selects': `The item whose <a href="/faq/how-do-I-avoid-duplicating-data.html">assigned ID</a> slug matches <code>assigned-id-slug</code>. `,
  },
  {
    'Selector': `#system-id`,
    'What it selects': `The item whose system ID matches <code>system-id</code>. `,
  },
  {
    'Selector': `.tag`,
    'What it selects': `All items whose Tags field contains <code>tag</code>. Note that this selector starts with a dot <code>.</code>`,
  },
  {
    'Selector': `["field name" operator "field value"]`,
    'What it selects': `All items that have a <a href="/overview/kumus-architecture.html#fields">field name and field value</a> that meet the condition of the <code>operator</code> (valid operators are listed below this table)`,
  },
  {
    'Selector': `["field name"]`,
    'What it selects': `All items that have any value in the field whose name matches <code>field name</code>`,
  },
  {
    'Selector': `[!"field name"]`,
    'What it selects': `All items that have no value in the field whose name matches <code>field name</code>`,
  },
  {
    'Selector': `:from(selector)`,
    'What it selects': `All connections coming from an item that matches the <code>selector</code>`,
  },
  {
    'Selector': `:to(selector)`,
    'What it selects': `All connections going to an item that matches the <code>selector</code>`,
  },
  {
    'Selector': `:directed`,
    'What it selects': `All directed connections`,
  },
  {
    'Selector': `:undirected`,
    'What it selects': `All undirected connections`,
  },
  {
    'Selector': `:mutual`,
    'What it selects': `All mutual connections`,
  },
  {
    'Selector': `:focus`,
    'What it selects': `All items at the root of a <a href="/guides/focus.html">focus setting</a>`,
  },
  {
    'Selector': `:orphan`,
    'What it selects': `All elements that have zero connections (including connections that have been filtered out)`,
  },
  {
    'Selector': `:not(selector)`,
    'What it selects': `All items that do <b>not</b> match the <code>selector</code>`,
  },
  {
    'Selector': `:loop(selector)`,
    'What it selects': `All items that are part of a loop matching <code>selector</code>`,
  },
  {
    'Selector': `this-selector --&gt; that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected to items that match <code>that-selector</code>`,
  },
  {
    'Selector': `this-selector &lt;-- that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected from items that match <code>that-selector</code>`,
  },
  {
    'Selector': `this-selector &lt;--&gt; that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected to or from items that match <code>that-selector</code>`,
  },
  {
    'Selector': `this-selector &lt;-connection-selector-&gt; that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected to or from items that match <code>that-selector</code> via connections that match <code>connection-selector</code>`,
  }
]
