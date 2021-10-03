---
_dbPageMeta:
  routeId: NOTIFY
  lastModifiedDate: '2021-10-29' # YYYY-MM-DD
  title: Notify | Notiflix
  description: 'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".'
  robots: index, follow, noodp, noydir
  ogImage: null
  themeColor: null

_dbNotifyBanner:
  importNamespace: Notify
  title: Notify
  description: 'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".'
  importPath: 'notiflix/build/notiflix-notify-aio'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOnlyThis: (B1) Notify Module, only JS (All in One => Internal CSS)
  htmlOnlyThisJS: dist/notiflix-notify-aio-X.X.X.min.js
  htmlOneByOne: (B2) All Modules, CSS and JS
  htmlOneByOneCSS: dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B3) All Modules, only JS (All in One => Internal CSS)
  htmlAllInOneJS: dist/notiflix-aio-X.X.X.min.js

_dbNotifyPlayground:
  title: Playground
  namespace: Notify
  comments:
    - "@param1 {string}: Required, a text in string format."
    - "@param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element."
    - "@param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)"
  methods:
    - id: SUCCESS
      sortOrder: 1
      isActive: true
      functionName: success
      defaultValue: Sol lucet omnibus
      docsLinkText: Options
      docsLinkRouteHash: "#DocsNotifySuccess"
    - id: FAILURE
      sortOrder: 2
      isActive: true
      functionName: failure
      defaultValue: Qui timide rogat docet negare
      docsLinkText: Options
      docsLinkRouteHash: "#DocsNotifyFailure"
    - id: WARNING
      sortOrder: 3
      isActive: true
      functionName: warning
      defaultValue: Memento te hominem esse
      docsLinkText: Options
      docsLinkRouteHash: "#DocsNotifyWarning"
    - id: INFO
      sortOrder: 4
      isActive: true
      functionName: info
      defaultValue: Cogito ergo sum
      docsLinkText: Options
      docsLinkRouteHash: "#DocsNotifyInfo"
  demoInfoTitle: Demo
  demoInfoDescription: A text can be typed for the demonstration.
  demoInputPlaceholder: Message
  demoButtonText: Send
  callbackInfoTitle: Callback Function
  callbackInfoDescription: A callback function can be added as the second parameter. The callback function can be used for all types of notifications. The notifications with the callback function do not disappear until they were clicked.
  callbackExampleMessage: Click to show an alert.
  callbackInputPlaceholder: Alert message
  callbackButtonText: Send
  extendDocsLinkText: All Options
  extendDocsLinkRouteHash: "#DocsNotify"
  extendInfoTitle: Extending the Options
  extendInfoDescription: Extending the initialize options with the new options for each notification element. An "options" object can be added as the second parameter. In addition, it has to be the third parameter if the second parameter has been already used for a callback function.
  extendExampleMessage: Peace at home, peace in the world.

---
