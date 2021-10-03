---
_dbPageMeta:
  routeId: LOADING
  lastModifiedDate: '2021-10-29' # YYYY-MM-DD
  title: Loading | Notiflix
  description: 'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.'
  robots: index, follow, noodp, noydir
  ogImage: null
  themeColor: null

_dbLoadingBanner:
  importNamespace: Loading
  title: Loading
  description: 'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.'
  importPath: 'notiflix/build/notiflix-loading-aio'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOnlyThis: (B1) Loading Module, only JS (All in One => Internal CSS)
  htmlOnlyThisJS: dist/notiflix-loading-aio-X.X.X.min.js
  htmlOneByOne: (B2) All Modules, CSS and JS
  htmlOneByOneCSS: dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B3) All Modules, only JS (All in One => Internal CSS)
  htmlAllInOneJS: dist/notiflix-aio-X.X.X.min.js

_dbLoadingPlayground:
  title: Playground
  namespace: Loading
  infoDocsLinkText: All Options
  infoDocsLinkRouteHash: "#DocsLoading"
  commentsIndicators:
    - "@param1 {string | Object}: Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator."
    - "@param2 {Object}: Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)"
  commentIndicatorOnly: Only loading indicators
  commentIndicatorWithMessage: Loading indicator with a message
  commentIndicatorWithNewOptions: Only loading indicator with the new options
  commentIndicatorWithMessageAndNewOptions: Loading indicator with a message, and the new options
  commentIndicatorCustom: Only custom loading indicator
  commentIndicatorCustomWithMessage: Custom loading indicator with a message
  commentsChange:
    - "@param1 {string}: Required, new message in string format."
  commentsRemove:
    - "@param1 {number}: Optional, milliseconds for delaying in number format."
  commentRemoveImmediately: Remove immediately
  commentRemoveWithDelay: Remove after delay => e.g. 1923ms
  methodsDefaultMessage: Loading...
  methodsIndicatorsTitle: Indicators
  methodsIndicatorsDescription: Show the indicators.
  methodsIndicators:
    - id: STANDARD
      sortOrder: 1
      isActive: true
      functionName: standard
    - id: HOURGLASS
      sortOrder: 2
      isActive: true
      functionName: hourglass
    - id: CIRCLE
      sortOrder: 3
      isActive: true
      functionName: circle
    - id: ARROWS
      sortOrder: 4
      isActive: true
      functionName: arrows
    - id: DOTS
      sortOrder: 5
      isActive: true
      functionName: dots
    - id: PULSE
      sortOrder: 6
      isActive: true
      functionName: pulse
  methodCustomTitle: Custom Indicator
  methodCustomDescription: Show a custom loading indicator.
  methodCustomSvgUrl: https://notiflix.github.io/dir/icon.svg
  methodCustom:
    id: CUSTOM
    isActive: true
    functionName: custom
  methodChangeTitle: Change
  methodChangeDescription: Changing the message of the indicator if exist.
  methodChangeMessage: Loading %20
  methodChange:
    id: CHANGE
    isActive: true
    functionName: change
  methodRemoveTitle: Remove
  methodRemoveDescription: Remove the indicator if exist.
  methodRemoveDuration: 1923
  methodRemove:
    id: REMOVE
    isActive: true
    functionName: remove
  demoTitle: Demo
  demoDescription: A loading indicator type can be chosen for the demonstration.
  demoInputPlaceholder: Loading Message (Optional)

---
