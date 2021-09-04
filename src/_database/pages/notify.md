---
_dbMeta:
  routeId: NOTIFY
  lastModifiedDate: '2021-10-29' # YYYY-MM-DD
  title: Notify | Notiflix
  description: 'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".'
  robots: noindex, nofollow, noodp, noydir # TODO: index, follow
  ogImage: null
  themeColor: null

_dbNotifyBanner:
  importNamespace: Notify
  title: Notify
  description: 'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOneByOne: (B1) CSS and JS
  htmlOneByOneCSS: ../dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: ../dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B2) or only JS (All in One => Internal CSS)
  htmlAllInOneJS: ../dist/notiflix-aio-X.X.X.min.js

_dbNotifyPlayground:
  title: Playground
  namespace: Notify
  comments:
    - "@param1 {string}: Required, a text in string format."
    - "@param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element."
    - "@param3 {Object}: Optional, extending the initialize options with new options for each notification element. (If the second parameter has been already used for a callback function.)"
  docsText: Options
  demoTitle: Demo
  demoDescription: A text can be typed for the demonstration.
  demoInputPlaceholder: Message
  demoButton: Send
  callbackTitle: Callback Function
  callbackDescription: A callback function can be added as a second parameter. The callback function can be used for all types of notifications. The notifications with the callback function do not disappear until they were clicked.
  callbackMessage: Click to show an alert.
  callbackInputPlaceholder: Alert message
  callbackButton: Send
  extendDocsText: All Options
  extendDocsRouteHash: "#DocsNotify"
  extendTitle: Extending the Options
  extendDescription: Extending the initialize options with the new options for each notification element. An "options" object can be added as a second parameter. In addition, it has to be the third parameter if the second parameter has been already used for a callback function.
  extendMessage: Peace at home, peace in the world.
  types:
    - id: SUCCESS
      sortOrder: 1
      isActive: true
      functionName: success
      defaultValue: Sol lucet omnibus
      docsRouteHash: "#DocsNotifySuccess"
    - id: FAILURE
      sortOrder: 2
      isActive: true
      functionName: failure
      defaultValue: Qui timide rogat docet negare
      docsRouteHash: "#DocsNotifyFailure"
    - id: WARNING
      sortOrder: 3
      isActive: true
      functionName: warning
      defaultValue: Memento te hominem esse
      docsRouteHash: "#DocsNotifyWarning"
    - id: INFO
      sortOrder: 4
      isActive: true
      functionName: info
      defaultValue: Cogito ergo sum
      docsRouteHash: "#DocsNotifyInfo"

---
