---
_dbMeta:
  routeId: DOCUMENTATION
  lastModifiedDate: '2021-10-29' # YYYY-MM-DD
  title: Documentation | Notiflix
  description: Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.
  robots: noindex, nofollow, noodp, noydir # TODO: index, follow
  ogImage: null
  themeColor: null

_dbDocsTableCommon:
  titleSuffix: ': All Options'
  description: 'All the options can be found in the table below. The "Code View" tab can be switched to see the usages of <span>init</span> and <span>merge</span> functions.'
  viewTable:
    button: Table View
    tableHead:
      option: Option
      type: Type
      defaultValue: Default Value
      description: Description
  viewCode:
    button: Code View
    descriptionInit: The "init()" function can be used to set custom options as globally.
    descriptionMerge: The "merge()" function can be used to deeply extend the "init()" options for a specific page or event globally.
    functionNameInit: init
    functionNameMerge: merge
    scopeWebApp: Website
    scopeGlobal: global.js (global scripts)
    scopeComponent: contact.js (contact page scripts)

_dbDocsTableNotify:
  namespace: Notify
  optionsCommon:
    sectionId: DocsNotify
    sectionType: common
    sectionTitle: 'Notify Common Options:'
    options:
      - name: width
        version: null
        type: string
        defaultValue: 280px
        description: Changes the width of the notifications.
      - name: position
        version: null
        type: string
        defaultValue: right-top
        description: '7 types of positions can be used: <span>right-top</span> <span>right-bottom</span> <span>left-top</span> <span>left-bottom</span> <span>center-top</span> <span>center-bottom</span> <span>center-center</span>'
      - name: distance
        version: null
        type: string
        defaultValue: 10px
        description: 'The distance between positioned notifications and the <span>body</span> element.'
  optionsSuccess:
    sectionId: DocsNotifySuccess
    sectionType: success
    sectionTitle: 'Notify Success Options:'
    options:
      - name: background
        version: null
        type: string
        defaultValue: '#32c682'
        description: Changes the background color.
      - name: textColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the text color.
      - name: childClassName
        version: null
        type: string
        defaultValue: 'success'
        description: Changes the class name.
      - name: notiflixIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the SVG icon color.
      - name: fontAwesomeClassName
        version: null
        type: string
        defaultValue: 'fas fa-check-circle'
        description: Changes the FontAwesome icon class name (FontAwesome has to be added to the project separately.)
      - name: fontAwesomeIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the FontAwesome icon color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(50,198,130,0.2)'
        description: 'Changes the color of the back overlay. (Overrides the common "backOverlayColor" option for this notification type. It can be set as an empty string to use the common one.)'

_dbDocsTableReport:
  namespace: Report
  optionsCommon:
    sectionId: DocsReport
    sectionType: common
    sectionTitle: 'Report Common Options:'
    options:
      - todo: furkan
  optionsSuccess:
    sectionId: DocsReportSuccess
    sectionType: success
    sectionTitle: 'Report Success Options:'
    options:
      - todo: furkan

_dbDocsTableConfirm:
  namespace: Confirm
  optionsCommon:
    sectionId: DocsConfirm
    sectionType: common
    sectionTitle: 'Confirm Common Options:'
    options:
      - todo: furkan

_dbDocsTableLoading:
  namespace: Loading
  optionsCommon:
    sectionId: DocsLoading
    sectionType: common
    sectionTitle: 'Loading Common Options:'
    options:
      - todo: furkan

_dbDocsTableBlock:
  namespace: Block
  optionsCommon:
    sectionId: DocsBlock
    sectionType: common
    sectionTitle: 'Block Common Options:'
    options:
      - todo: furkan

---
