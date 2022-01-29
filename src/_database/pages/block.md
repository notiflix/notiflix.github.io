---
_dbPageMeta:
  routeId: BLOCK
  lastModifiedDate: '2022-01-29' # YYYY-MM-DD
  title: Block | Notiflix
  description: 'Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user’s interactions on the blocked elements.'
  robots: index, follow, noodp, noydir
  ogImage: null
  themeColor: null

_dbBlockBanner:
  importNamespace: Block
  title: Block
  description: 'Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user’s interactions on the blocked elements.'
  importPath: 'notiflix/build/notiflix-block-aio'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOnlyThis: (B1) Block Module, only JS (All in One => Internal CSS)
  htmlOnlyThisJS: dist/notiflix-block-aio-X.X.X.min.js
  htmlOneByOne: (B2) All Modules, CSS and JS
  htmlOneByOneCSS: dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B3) All Modules, only JS (All in One => Internal CSS)
  htmlAllInOneJS: dist/notiflix-aio-X.X.X.min.js


_dbBlockPlayground:
  title: Playground
  namespace: Block
  infoDocsLinkText: All Options
  infoDocsLinkRouteHash: "#DocsBlock"
  commentsBlock:
    - "@param1 {string | Array<HTMLElement> | NodeListOf<HTMLElement>}:  Required, CSS selector(s) that matches the element(s) | Array of HTMLElments | NodeListOf HTMLElments to block."
    - "@param2 {string | Object}: Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element."
    - "@param3 {Object}: Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)"
  commentBlockOnly: Only indicators
  commentBlockWithMessage: Indicator with a blocking message
  commentBlockWithNewOptions: Only indicator with the new options
  commentBlockWithMessageAndNewOptions: Indicator with a blocking message, and the new options
  commentsUnblock:
    - "@param1 {string | Array<HTMLElement> | NodeListOf<HTMLElement>}: Required, CSS selector(s) that matches the element(s) | Array of HTMLElments | NodeListOf HTMLElments to unblock."
    - "@param2 {number}: Optional, milliseconds for delaying in number format."
  commentUnblockImmediately: Unblock immediately
  commentUnblockWithDelay: Unblock after delay => e.g. 1923ms
  methodsDefaultSelector: .js-element
  methodsDefaultMessage: Please wait...
  methodsBlockTitle: Block
  methodsBlockDescription: Block the element(s).
  methodsBlockIndicators:
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
  methodUnblockTitle: Unblock
  methodUnblockDescription: Unblock the element(s) if already has been blocked.
  methodUnblockDuration: 1923
  methodUnblock:
    id: REMOVE
    isActive: true
    functionName: remove
  demoTitle: Demo
  demoDescription: A blocking indicator type can be chosen for the demonstration.
  demoInputPlaceholder: Blocking Message (Optional)
  demoElementTitle: 5 minutes for the next 50 years of your life
  demoElementDescription: "... <br/><br/>Prioritize who you are, who you want to be and don’t spend time with anything that antagonizes your character. <br/><br/>Be brave, take the hill, but first answer that question: What’s my hill? <br/><br/>So first we have to define success for ourselves. And then we have to put in the work to maintain it. Make that daily tally. Tend to our garden. Keep the things that are important to us in good shape. <br/><br/>..."
  demoElementImage: /content/media/block/notiflix-block-element-image.png
  demoButtonUnblock: Remove/Unblock

---
