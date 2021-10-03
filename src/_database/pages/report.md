---
_dbPageMeta:
  routeId: REPORT
  lastModifiedDate: '2021-10-29' # YYYY-MM-DD
  title: Report | Notiflix
  description: 'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".'
  robots: index, follow, noodp, noydir
  ogImage: null
  themeColor: null

_dbReportBanner:
  importNamespace: Report
  title: Report
  description: 'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".'
  importPath: 'notiflix/build/notiflix-report-aio'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOnlyThis: (B1) Report Module, only JS (All in One => Internal CSS)
  htmlOnlyThisJS: dist/notiflix-report-aio-X.X.X.min.js
  htmlOneByOne: (B2) All Modules, CSS and JS
  htmlOneByOneCSS: dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B3) All Modules, only JS (All in One => Internal CSS)
  htmlAllInOneJS: dist/notiflix-aio-X.X.X.min.js

_dbReportPlayground:
  title: Playground
  namespace: Report
  comments:
    - "@param1 {string}: Required, title text in string format."
    - "@param2 {string}: Required, message text in string format."
    - "@param3 {string}: Required, button text in string format."
    - "@param4 {function | Object}: Optional, a callback function that will be called when the button element has been clicked. Or, extending the initialize options with the new options for each notification element."
    - "@param5 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the fourth parameter has been already used for a callback function.)"
  methods:
    - id: SUCCESS
      sortOrder: 1
      isActive: true
      functionName: success
      defaultValueTitle: Notiflix Success
      defaultValueMessage: '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein'
      defaultValueButton: Okay
      docsLinkText: Options
      docsLinkRouteHash: "#DocsReportSuccess"
    - id: FAILURE
      sortOrder: 2
      isActive: true
      functionName: failure
      defaultValueTitle: Notiflix Failure
      defaultValueMessage: '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford'
      defaultValueButton: Okay
      docsLinkText: Options
      docsLinkRouteHash: "#DocsReportFailure"
    - id: WARNING
      sortOrder: 3
      isActive: true
      functionName: warning
      defaultValueTitle: Notiflix Warning
      defaultValueMessage: '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br/><br/>- Mustafa Kemal Ataturk'
      defaultValueButton: Okay
      docsLinkText: Options
      docsLinkRouteHash: "#DocsReportWarning"
    - id: INFO
      sortOrder: 4
      isActive: true
      functionName: info
      defaultValueTitle: Notiflix Info
      defaultValueMessage: '"Knowledge rests not upon truth alone, but upon error also." <br/><br/>- Carl Gustav Jung'
      defaultValueButton: Okay
      docsLinkText: Options
      docsLinkRouteHash: "#DocsReportInfo"
  demoInfoTitle: Demo
  demoInfoDescription: A title, description, and button text can be typed for the demonstration.
  demoInputPlaceholderTitle: Title
  demoInputPlaceholderMessage: Message
  demoInputPlaceholderButton: Button
  demoButtonText: Send
  callbackInfoTitle: Callback Function
  callbackInfoDescription: A callback function can be added as the fourth parameter. The callback function can be used for all types of notifications.
  callbackExampleTitle: Notiflix
  callbackExampleMessage: 'Be brave, take the hill, but first answer that question: "What’s my hill?"'
  callbackExampleButton: Alert
  callbackInputPlaceholder: Alert message
  callbackButtonText: Send
  extendDocsLinkText: All Options
  extendDocsLinkRouteHash: "#DocsReport"
  extendInfoTitle: Extending the Options
  extendInfoDescription: Extending the initialize options with the new options for each notification element. An "options" object can be added as the fourth parameter. In addition, it has to be the fifth parameter if the fourth parameter has been already used for a callback function.
  extendExampleTitle: Title
  extendExampleMessage: Message
  extendExampleButton: Button
---
