export const interactiveControlsReference = [
  {
    "Property": "as",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines how the control is presented",
      validValues: [
        "labels",
        "buttons",
        "dots",
        "dropdown"
      ]
    }
  },
  {
    "Property": "background-color",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": false,
    info: {
      description: "Defines background color of control",
      validValues: [
        "color"
      ]
    }
  },
  {
    "Property": "by",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": false,
    "View toggle": false,
    info: {
      description: "Defines the field to filter, showcase, or cluster by",
      validValues: [
        "''Field Name'"
      ]
    }
  },
  {
    "Property": "color",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines color of control's text (labels, placeholders, and summaries only)",
      validValues: [
        "color"
      ]
    }
  },
  {
    "Property": "default",
    "Filter": true,
    "Showcase": true,
    "Cluster": false,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines which options should be selected by default",
      validValues: [
        "none",
        "show-all",
        "select all",
        "''field value 1', 'field value 2',..."
      ]
    }
  },
  {
    "Property": "except",
    "Filter": true,
    "Showcase": true,
    "Cluster": false,
    "Tagged-timeline": false,
    "View toggle": false,
    info: {
      description: "Allows you to remove field values from the available choices",
      validValues: [
        "''field value 1', 'field value 2',..."
      ]
    }
  },
  {
    "Property": "font-family",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines font family of control's text (labels, placeholders, and summaries only)",
      validValues: [
        "family-name",
        "generic-family"
      ]
    }
  },
  {
    "Property": "font-size",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines size of control's text (labels, placeholders, and summaries only)",
      validValues: [
        "number"
      ]
    }
  },
  {
    "Property": "font-style",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines style of control's text (labels, placeholders, and summaries only)",
      validValues: [
        "normal",
        "italic"
      ]
    }
  },
  {
    "Property": "font-weight",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines weight of control's text (labels, placeholders, and summaries only)",
      validValues: [
        "number"
      ]
    }
  },
  {
    "Property": "height",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines height of control",
      validValues: [
        "number"
      ]
    }
  },
  {
    "Property": "label",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Adds a label above the control",
      validValues: [
        "'My Label'"
      ]
    }
  },
  {
    "Property": "margin",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines space between the control and other controls on the map",
      validValues: [
        "number"
      ]
    }
  },
  {
    "Property": "mode",
    "Filter": false,
    "Showcase": true,
    "Cluster": false,
    "Tagged-timeline": false,
    "View toggle": false,
    info: {
      description: "Controls how the selection is showcased. <code>normal</code> is the default and showcases the selection plus any connections between the showcased elements. <code>loose</code> showcases the selection plus neighboring elements. <code>strict</code> only showcases the selection itself.",
      validValues: [
        "normal",
        "loose",
        "strict"
      ]
    }
  },
  {
    "Property": "multiple",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Controls whether more than one option can be selected at a time",
      validValues: [
        "true",
        "false",
        "match-all"
      ]
    }
  },
  {
    "Property": "only",
    "Filter": true,
    "Showcase": true,
    "Cluster": false,
    "Tagged-timeline": false,
    "View toggle": false,
    info: {
      description: "Allows you to explicitly define which field values should be included as available choices",
      validValues: [
        "''field value 1', 'field value 2',..."
      ]
    }
  },
  {
    "Property": "opacity",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines opacity of the control",
      validValues: [
        "0..1"
      ]
    }
  },
  {
    "Property": "options",
    "Filter": false,
    "Showcase": false,
    "Cluster": false,
    "Tagged-timeline": false,
    "View toggle": true,
    info: {
      description: "Allows you to explicitly define which options should be included as available choices",
      validValues: [
        "''partial-view-1', 'partial-view-2',..."
      ]
    }
  },
  {
    "Property": "padding",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines space between the control's border and its contents",
      validValues: [
        "number"
      ]
    }
  },
  {
    "Property": "placeholder",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "The text to display when nothing is selected<br>(for <code>as: dropdown</code> only)",
      validValues: [
        "string"
      ]
    }
  },
  {
    "Property": "range",
    "Filter": false,
    "Showcase": false,
    "Cluster": false,
    "Tagged-timeline": true,
    "View toggle": false,
    info: {
      description: "Defines the years that should be included",
      validValues: [
        "year..year"
      ]
    }
  },
  {
    "Property": "summary",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Summarizes the options that have been selected<br>(for <code>as: dropdown</code> only)",
      validValues: [
        "string"
      ]
    }
  },
  {
    "Property": "target",
    "Filter": true,
    "Showcase": true,
    "Cluster": false,
    "Tagged-timeline": true,
    "View toggle": false,
    info: {
      description: "Defines which items will be affected by the control",
      validValues: [
        "selector"
      ]
    }
  },
  {
    "Property": "width",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    info: {
      description: "Defines width of control",
      validValues: [
        "number"
      ]
    }
  }
]
