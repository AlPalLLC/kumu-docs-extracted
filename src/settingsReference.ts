export const settingsReference = [
  {
    "Property": "attenuation",
    "Description": "Determines whether elements and connections maintain their size relative to the background map (available for the Geo template only)",
    "Possible values": ["on", "off"]
  },
  {
    "Property": "background-color",
    "Description": "Sets the canvas' background color",
    "Possible values": ["color"]
  },
  {
    "Property": "background-opacity",
    "Description": "Sets the opacity of items outside of a showcased selection",
    "Possible values": ["0..1"]
  },
  {
    "Property": "bridge",
    "Description": "Activates bridging. See the <a href=\"/guides/bridge.html#bridge-in-the-advanced-editor\">bridge guide</a> for more information.",
    "Possible values": ["element-selector"]
  },
  {
    "Property": "cluster",
    "Description": "Activates clustering. See the <a href=\"/guides/clustering.html#activate-clustering-in-the-advanced-editor\">cluster guide</a> for more information.",
    "Possible values": ["'field name'", "element-selector by 'field name'", "element-selector by 'field name' as 'element type'"]
  },
  {
    "Property": "culling",
    "Description": "Determines whether elements and connections are hidden when the reader zooms in very close",
    "Possible values": ["on", "off"]
  },
  {
    "Property": "focus",
    "Description": "Activates focus. See the <a href=\"/guides/focus.html#activate-focus-in-the-advanced-editor\">focus guide</a> for more information.",
    "Possible values": ["selector out number"]
  },
  {
    "Property": "font-cutoff",
    "Description": "Sets the minimum font size at which labels will display when the map is zoomed out. Set to <code>0</code> to always display labels, regardless of zoom level.",
    "Possible values": ["number"]
  },
  {
    "Property": "foreground-opacity",
    "Description": "Sets the opacity of showcased items ",
    "Possible values": ["0..1"]
  },
  {
    "Property": "geo-location",
    "Description": "Sets the field that will be used to geo-locate elements",
    "Possible values": ["'field name'", "string template"]
  },
  {
    "Property": "geo-style",
    "Description": "Sets the style of the geo map",
    "Possible values": ["auto", "streets", "satellite"]
  },
  {
    "Property": "ignore",
    "Description": "Ignores a selection. See the <a href=\"/guides/filter.html#filter-in-the-advanced-editor\">filter guide</a> for more information.",
    "Possible values": ["selector"]
  },
  {
    "Property": "include",
    "Description": "Includes a selection. See the <a href=\"/guides/filter.html#filter-in-the-advanced-editor\">filter guide</a> for more information.",
    "Possible values": ["selector"]
  },
  {
    "Property": "layout",
    "Description": "Sets the layout type",
    "Possible values": ["force", "static", "scatter"]
  },
  {
    "Property": "layout-bounds-xmax",
    "Description": "Sets a maximum x coordinate that grid and guide lines can extend to",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-bounds-xmin",
    "Description": "Sets a minimum x coordinate that grid and guide lines can extend to",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-bounds-ymax",
    "Description": "Sets a maximum y coordinate that grid and guide lines can extend to",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-bounds-ymin",
    "Description": "Sets a minimum y coordinate that grid and guide lines can extend to",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-gravity",
    "Description": "Sets the gravity for the force-directed layout",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-grid",
    "Description": "Determines whether a grid will be shown",
    "Possible values": ["on", "off"]
  },
  {
    "Property": "layout-grid-color",
    "Description": "Sets the color of the grid",
    "Possible values": ["color"]
  },
  {
    "Property": "layout-grid-offset",
    "Description": "Sets the space between grid lines",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-grid-width",
    "Description": "Sets the thickness of grid lines",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-guide-color",
    "Description": "Sets the color of guide lines",
    "Possible values": ["color"]
  },
  {
    "Property": "layout-guide-width",
    "Description": "Sets the thickness of guide lines",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-guides",
    "Description": "Sets the x or y coordinate for each guide line, or the origin and radius of a circle",
    "Possible values": ["x(number)", "y(number)", "circle(x, y, r)", "circle(r)"]
  },
  {
    "Property": "layout-particle-charge",
    "Description": "Sets the particle charge for the force-directed layout",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-preset",
    "Description": "Chooses a preset version of the force-directed layout",
    "Possible values": ["auto", "dense", "hairball"]
  },
  {
    "Property": "layout-spring-length",
    "Description": "Sets the spring length for the force-directed layout",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-spring-strength",
    "Description": "Sets the spring strength for the force-directed layout",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-x",
    "Description": "Sets the field used to determine elements' x coordinate in the scatter layout",
    "Possible values": ["'field name'"]
  },
  {
    "Property": "layout-x-multiplier",
    "Description": "Sets a number that will be multiplied by each elements <code>layout-x</code> field to determine their final x coordinate",
    "Possible values": ["number"]
  },
  {
    "Property": "layout-y",
    "Description": "Sets the field used to determine elements' x coordinate in the scatter layout",
    "Possible values": ["'field name'"]
  },
  {
    "Property": "layout-y-multiplier",
    "Description": "Sets a number that will be multiplied by each elements <code>layout-y</code> field to determine their final y coordinate",
    "Possible values": ["number"]
  },
  {
    "Property": "notification-color",
    "Description": "Sets the color of asterisks created by <a href=\"/guides/issues.html\">Issues</a>",
    "Possible values": ["color"]
  },
  {
    "Property": "profile",
    "Description": "Controls whether or not profiles can be opened",
    "Possible values": ["on", "off"]
  },
  {
    "Property": "quality",
    "Description": "Sets the render quality",
    "Possible values": ["fast", "best"]
  },
  {
    "Property": "radar",
    "Description": "Determines whether a radar will be shown",
    "Possible values": ["on", "off"]
  },
  {
    "Property": "radar-axes",
    "Description": "Sets the labels for radar axes",
    "Possible values": ["Axis 1, Axis 2, Axis 3..."]
  },
  {
    "Property": "radar-font-color",
    "Description": "Sets the color of radar labels",
    "Possible values": ["color"]
  },
  {
    "Property": "radar-font-family",
    "Description": "Sets the font family of radar labels",
    "Possible values": ["family-name", "generic-family"]
  },
  {
    "Property": "radar-font-size",
    "Description": "Sets the font size for radar labels",
    "Possible values": ["number"]
  },
  {
    "Property": "radar-ring-color",
    "Description": "Sets the color between radar rings",
    "Possible values": ["color"]
  },
  {
    "Property": "radar-ring-opacity",
    "Description": "Sets the opacity of radar rings",
    "Possible values": ["0..1"]
  },
  {
    "Property": "radar-ring-size",
    "Description": "Sets the distance between radar rings",
    "Possible values": ["number"]
  },
  {
    "Property": "radar-ring-size-inner",
    "Description": "Sets the radius of the inner radar ring",
    "Possible values": ["number"]
  },
  {
    "Property": "radar-rings",
    "Description": "Sets the labels for radar rings",
    "Possible values": ["Ring 1, Ring 2, Ring 3..."]
  },
  {
    "Property": "renderer",
    "Description": "Chooses which rendered will be used",
    "Possible values": ["canvas", "webgl"]
  },
  {
    "Property": "scale-max",
    "Description": "Sets the maximum allowed zoom level",
    "Possible values": ["number"]
  },
  {
    "Property": "scale-min",
    "Description": "Sets the minimum allowed zoom level",
    "Possible values": ["number"]
  },
  {
    "Property": "selection-color",
    "Description": "Sets the color of the ring that appears around selected elements",
    "Possible values": ["color"]
  },
  {
    "Property": "showcase",
    "Description": "Activates showcase. See the <a href=\"/guides/showcase.html#customize-showcase-settings-in-the-advanced-editor\">showcase guide</a> for more information.",
    "Possible values": ["selector"]
  },
  {
    "Property": "template",
    "Description": "Chooses a template",
    "Possible values": ["causal-loop", "custom", "geo", "sna", "stakeholder", "stock-and-flow", "systems", "systems-leverage"]
  },
  {
    "Property": "theme",
    "Description": "Sets the view's overall theme",
    "Possible values": ["light", "dark"]
  }
]
