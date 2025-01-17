---
_dbPageMeta:
  routeId: DOCUMENTATION
  lastModifiedDate: '2025-01-04' # YYYY-MM-DD
  title: Documentation | Notiflix
  description: Notiflix is a dependency-free, secure, and lightweight JavaScript library built with pure JavaScript, offering client-side non-blocking notifications, popup boxes, loading indicators, and more.
  robots: index, follow, noodp, noydir
  ogImage: null
  themeColor: null

# Docs: Search: begin
_dbDocsSearch:
  bannerImageSrc: /content/media/documentation/notiflix-documentation-banner.svg
  bannerImageAlt: Search in the documentation
  selectPrefix: Search in
  inputPlaceholder: Search in the documentation
  inputMaxLength: 20
  resultsTitle: "Results for the {{x}} options:"
  resultsNotFound: No results found.
  resultsButtonMore: More
# Docs: Search: end

# Docs: Table Common Content: begin
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
# Docs: Table Common Content: end

# Docs: Table Notify Content: begin
_dbDocsTableNotify:
  namespace: Notify
  optionsCommon:
    sectionId: DocsNotify
    sectionType: common
    sectionTitle: 'Common Options:'
    options:
      - name: width
        version: null
        type: string
        defaultValue: '280px'
        description: Changes the width of the notifications.
      - name: position
        version: null
        type: string
        defaultValue: 'right-top'
        description: '7 types of positions can be used: <span>right-top</span> <span>right-bottom</span> <span>left-top</span> <span>left-bottom</span> <span>center-top</span> <span>center-bottom</span> <span>center-center</span>'
      - name: distance
        version: null
        type: string
        defaultValue: '10px'
        description: 'The distance between positioned notifications and the <span>body</span> element.'
      - name: opacity
        version: null
        type: number
        defaultValue: '1'
        description: Changes the opacity. (Between 0 and 1)
      - name: borderRadius
        version: null
        type: string
        defaultValue: '5px'
        description: Changes the radius of the notifications corners.
      - name: rtl
        version: null
        type: boolean
        defaultValue: 'false'
        description: 'Specifies the text direction to "right-to-left".'
      - name: timeout
        version: null
        type: number
        defaultValue: '3000'
        description: The delay in milliseconds to hide and remove the notifications.
      - name: messageMaxLength
        version: null
        type: number
        defaultValue: '110'
        description: The maximum length of the notifications message text.
      - name: backOverlay
        version: null
        type: boolean
        defaultValue: 'false'
        description: Adds a background overlay to the notifications.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.5)'
        description: 'Changes the color of the background overlay. (Only if the notification type-based "backOverlayColor" option is an empty string.)'
      - name: plainText
        version: null
        type: boolean
        defaultValue: 'true'
        description: Strips all HTML tags.
      - name: showOnlyTheLastOne
        version: null
        type: boolean
        defaultValue: 'false'
        description: Auto-removes all the notifications except for the last one.
      - name: clickToClose
        version: null
        type: boolean
        defaultValue: 'false'
        description: Removes the notification when it has been clicked without waiting for the delay.
      - name: pauseOnHover
        version: null
        type: boolean
        defaultValue: 'true'
        description: Auto-remove functionality will be paused for each notification element when the pointer(mouse) enters on it.
      - name: ID
        version: null
        type: string
        defaultValue: 'NotiflixNotify'
        description: Changes the ID (attribute) of the notifications.
      - name: className
        version: null
        type: string
        defaultValue: 'notiflix-notify'
        description: Changes the class name (attribute) of the notifications.
      - name: zindex
        version: null
        type: number
        defaultValue: '4001'
        description: Changes the z-index of the notifications.
      - name: fontFamily
        version: null
        type: string
        defaultValue: 'Quicksand'
        description: Changes the font-family of the notifications message text.
      - name: fontSize
        version: null
        type: string
        defaultValue: '13px'
        description: Changes the font-size of the notifications message text.
      - name: cssAnimation
        version: null
        type: boolean
        defaultValue: 'true'
        description: Enables/disables CSS animations to show/hide the notifications.
      - name: cssAnimationDuration
        version: null
        type: number
        defaultValue: '400'
        description: Changes the CSS animations duration as milliseconds.
      - name: cssAnimationStyle
        version: null
        type: string
        defaultValue: 'fade'
        description: '6 types of styles can be used: <span>fade</span> <span>zoom</span> <span>from-right</span> <span>from-top</span> <span>from-bottom</span> <span>from-left</span>'
      - name: closeButton
        version: null
        type: boolean
        defaultValue: 'false'
        description: Adds a close button/icon to the notifications. (Notifications with a close button won't disappear until they were clicked.)
      - name: useIcon
        version: null
        type: boolean
        defaultValue: 'true'
        description: Allows using built-in SVG or external FontAwesome icons in the notifications. (By default, built-in SVG icons have been defined.)
      - name: useFontAwesome
        version: null
        type: boolean
        defaultValue: 'false'
        description: Ignores built-in SVG icons and allows to use of external FontAwesome icons.
      - name: fontAwesomeIconStyle
        version: null
        type: string
        defaultValue: 'basic'
        description: '2 types of styles can be used: <span>basic</span> <span>shadow</span>'
      - name: fontAwesomeIconSize
        version: null
        type: string
        defaultValue: '34px'
        description: Changes the font-size of the FontAwesome icons.
  optionsSuccess:
    sectionId: DocsNotifySuccess
    sectionType: success
    sectionTitle: 'Success Options:'
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
        defaultValue: 'notiflix-notify-success'
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
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this notification type. This one can be set as an empty string to use the common one.)'
  optionsFailure:
    sectionId: DocsNotifyFailure
    sectionType: failure
    sectionTitle: 'Failure Options:'
    options:
      - name: background
        version: null
        type: string
        defaultValue: '#ff5549'
        description: Changes the background color.
      - name: textColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the text color.
      - name: childClassName
        version: null
        type: string
        defaultValue: 'notiflix-notify-failure'
        description: Changes the class name.
      - name: notiflixIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the SVG icon color.
      - name: fontAwesomeClassName
        version: null
        type: string
        defaultValue: 'fas fa-times-circle'
        description: Changes the FontAwesome icon class name (FontAwesome has to be added to the project separately.)
      - name: fontAwesomeIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the FontAwesome icon color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(255,85,73,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this notification type. This one can be set as an empty string to use the common one.)'
  optionsWarning:
    sectionId: DocsNotifyWarning
    sectionType: warning
    sectionTitle: 'Warning Options:'
    options:
      - name: background
        version: null
        type: string
        defaultValue: '#eebf31'
        description: Changes the background color.
      - name: textColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the text color.
      - name: childClassName
        version: null
        type: string
        defaultValue: 'notiflix-notify-warning'
        description: Changes the class name.
      - name: notiflixIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the SVG icon color.
      - name: fontAwesomeClassName
        version: null
        type: string
        defaultValue: 'fas fa-exclamation-circle'
        description: Changes the FontAwesome icon class name (FontAwesome has to be added to the project separately.)
      - name: fontAwesomeIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the FontAwesome icon color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(238,191,49,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this notification type. This one can be set as an empty string to use the common one.)'
  optionsInfo:
    sectionId: DocsNotifyInfo
    sectionType: info
    sectionTitle: 'Info Options:'
    options:
      - name: background
        version: null
        type: string
        defaultValue: '#26c0d3'
        description: Changes the background color.
      - name: textColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the text color.
      - name: childClassName
        version: null
        type: string
        defaultValue: 'notiflix-notify-info'
        description: Changes the class name.
      - name: notiflixIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the SVG icon color.
      - name: fontAwesomeClassName
        version: null
        type: string
        defaultValue: 'fas fa-info-circle'
        description: Changes the FontAwesome icon class name (FontAwesome has to be added to the project separately.)
      - name: fontAwesomeIconColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.2)'
        description: Changes the FontAwesome icon color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(38,192,211,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this notification type. This one can be set as an empty string to use the common one.)'
# Docs: Table Notify Content: end

# Docs: Table Report Content: begin
_dbDocsTableReport:
  namespace: Report
  optionsCommon:
    sectionId: DocsReport
    sectionType: common
    sectionTitle: 'Common Options:'
    options:
      - name: className
        version: null
        type: string
        defaultValue: 'notiflix-report'
        description: Changes the class name (attribute).
      - name: width
        version: null
        type: string
        defaultValue: '320px'
        description: Changes the width.
      - name: backgroundColor
        version: null
        type: string
        defaultValue: '#f8f8f8'
        description: Changes the background color.
      - name: borderRadius
        version: null
        type: string
        defaultValue: '25px'
        description: Changes the radius of the corners.
      - name: rtl
        version: null
        type: boolean
        defaultValue: 'false'
        description: 'Specifies the text direction to "right-to-left".'
      - name: zindex
        version: null
        type: number
        defaultValue: '4002'
        description: Changes the z-index.
      - name: backOverlay
        version: null
        type: boolean
        defaultValue: 'true'
        description: Adds a background overlay.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.5)'
        description: 'Changes the color of the background overlay. (Only if the report type-based "backOverlayColor" option is an empty string.)'
      - name: backOverlayClickToClose
        version: 'v3.2.5'
        type: boolean
        defaultValue: 'false'
        description: Removes the Report Notification when the background overlay element has been clicked. The "backOverlay" option has to be "true" as well.
      - name: fontFamily
        version: null
        type: string
        defaultValue: 'Quicksand'
        description: Changes the font-family.
      - name: svgSize
        version: null
        type: string
        defaultValue: '110px'
        description: Changes the built-in SVG icons width and height. (Notiflix uses square scaled icons.)
      - name: plainText
        version: null
        type: boolean
        defaultValue: 'true'
        description: Strips all HTML tags.
      - name: titleFontSize
        version: null
        type: string
        defaultValue: '16px'
        description: Changes the font-size of the title text.
      - name: titleMaxLength
        version: null
        type: number
        defaultValue: '34'
        description: The maximum length of the title text.
      - name: messageFontSize
        version: null
        type: string
        defaultValue: '13px'
        description: Changes the font-size of the message text.
      - name: messageMaxLength
        version: null
        type: number
        defaultValue: '400'
        description: The maximum length of the message text.
      - name: buttonFontSize
        version: null
        type: string
        defaultValue: '14px'
        description: Changes the font-size of the button text.
      - name: buttonMaxLength
        version: null
        type: number
        defaultValue: '34'
        description: The maximum length of the button text.
      - name: cssAnimation
        version: null
        type: boolean
        defaultValue: 'true'
        description: Enables/disables CSS animations to show/hide.
      - name: cssAnimationDuration
        version: null
        type: number
        defaultValue: '360'
        description: Changes the CSS animations duration as milliseconds.
      - name: cssAnimationStyle
        version: null
        type: string
        defaultValue: 'fade'
        description: '2 types of styles can be used: <span>fade</span> <span>zoom</span>'
  optionsSuccess:
    sectionId: DocsReportSuccess
    sectionType: success
    sectionTitle: 'Success Options:'
    options:
      - name: svgColor
        version: null
        type: string
        defaultValue: '#32c682'
        description: Changes the built-in SVG icon color.
      - name: titleColor
        version: null
        type: string
        defaultValue: '#1e1e1e'
        description: Changes the title text color.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#242424'
        description: Changes the message text color.
      - name: buttonBackground
        version: null
        type: string
        defaultValue: '#32c682'
        description: Changes the button background color.
      - name: buttonColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the button text color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(50,198,130,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this report type. This one can be set as an empty string to use the common one.)'
  optionsFailure:
    sectionId: DocsReportFailure
    sectionType: failure
    sectionTitle: 'Failure Options:'
    options:
      - name: svgColor
        version: null
        type: string
        defaultValue: '#ff5549'
        description: Changes the built-in SVG icon color.
      - name: titleColor
        version: null
        type: string
        defaultValue: '#1e1e1e'
        description: Changes the title text color.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#242424'
        description: Changes the message text color.
      - name: buttonBackground
        version: null
        type: string
        defaultValue: '#ff5549'
        description: Changes the button background color.
      - name: buttonColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the button text color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(255,85,73,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this report type. This one can be set as an empty string to use the common one.)'
  optionsWarning:
    sectionId: DocsReportWarning
    sectionType: warning
    sectionTitle: 'Warning Options:'
    options:
      - name: svgColor
        version: null
        type: string
        defaultValue: '#eebf31'
        description: Changes the built-in SVG icon color.
      - name: titleColor
        version: null
        type: string
        defaultValue: '#1e1e1e'
        description: Changes the title text color.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#242424'
        description: Changes the message text color.
      - name: buttonBackground
        version: null
        type: string
        defaultValue: '#eebf31'
        description: Changes the button background color.
      - name: buttonColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the button text color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(238,191,49,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this report type. This one can be set as an empty string to use the common one.)'
  optionsInfo:
    sectionId: DocsReportInfo
    sectionType: info
    sectionTitle: 'Info Options:'
    options:
      - name: svgColor
        version: null
        type: string
        defaultValue: '#26c0d3'
        description: Changes the built-in SVG icon color.
      - name: titleColor
        version: null
        type: string
        defaultValue: '#1e1e1e'
        description: Changes the title text color.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#242424'
        description: Changes the message text color.
      - name: buttonBackground
        version: null
        type: string
        defaultValue: '#26c0d3'
        description: Changes the button background color.
      - name: buttonColor
        version: null
        type: string
        defaultValue: '#fff'
        description: Changes the button text color.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(38,192,211,0.2)'
        description: 'Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this report type. This one can be set as an empty string to use the common one.)'
# Docs: Table Report Content: end

# Docs: Table Confirm Content: begin
_dbDocsTableConfirm:
  namespace: Confirm
  optionsCommon:
    sectionId: DocsConfirm
    sectionType: common
    sectionTitle: 'Common Options:'
    options:
      - name: className
        version: null
        type: string
        defaultValue: 'notiflix-confirm'
        description: Changes the class name (attribute).
      - name: width
        version: null
        type: string
        defaultValue: '300px'
        description: Changes the width.
      - name: zindex
        version: null
        type: number
        defaultValue: '4003'
        description: Changes the z-index.
      - name: position
        version: null
        type: string
        defaultValue: 'center'
        description: '9 types of positions can be used: <span>center</span> <span>center-top</span> <span>center-bottom</span> <span>right-top</span> <span>right-center</span> <span>right-bottom</span> <span>left-top</span> <span>left-center</span> <span>left-bottom</span>'
      - name: distance
        version: null
        type: string
        defaultValue: '10px'
        description: 'The distance between positioned confirm boxes and the <span>body</span> element.'
      - name: backgroundColor
        version: null
        type: string
        defaultValue: '#f8f8f8'
        description: Changes the background color.
      - name: borderRadius
        version: null
        type: string
        defaultValue: '25px'
        description: Changes the radius of the corners.
      - name: backOverlay
        version: null
        type: boolean
        defaultValue: 'true'
        description: Adds a background overlay.
      - name: backOverlayColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.5)'
        description: Changes the color of the background overlay.
      - name: rtl
        version: null
        type: boolean
        defaultValue: 'false'
        description: 'Specifies the text direction to "right-to-left".'
      - name: fontFamily
        version: null
        type: string
        defaultValue: 'Quicksand'
        description: Changes the font-family.
      - name: cssAnimation
        version: null
        type: boolean
        defaultValue: 'true'
        description: Enables/disables CSS animations to show/hide.
      - name: cssAnimationDuration
        version: null
        type: number
        defaultValue: '300'
        description: Changes the CSS animations duration as milliseconds.
      - name: cssAnimationStyle
        version: null
        type: string
        defaultValue: 'fade'
        description: '2 types of styles can be used: <span>fade</span> <span>zoom</span>'
      - name: plainText
        version: null
        type: boolean
        defaultValue: 'true'
        description: Strips all HTML tags.
      - name: titleColor
        version: null
        type: string
        defaultValue: '#32c682'
        description: Changes the color of the title text.
      - name: titleFontSize
        version: null
        type: string
        defaultValue: '16px'
        description: Changes the font-size of the title text.
      - name: titleMaxLength
        version: null
        type: number
        defaultValue: '34'
        description: The maximum length of the title text.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#1e1e1e'
        description: Changes the color of the message text.
      - name: messageFontSize
        version: null
        type: string
        defaultValue: '14px'
        description: Changes the font-size of the message text.
      - name: messageMaxLength
        version: null
        type: number
        defaultValue: '110'
        description: The maximum length of the message text.
      - name: buttonsFontSize
        version: null
        type: string
        defaultValue: '15px'
        description: Changes the font-size of the buttons text.
      - name: buttonsMaxLength
        version: null
        type: number
        defaultValue: '34'
        description: The maximum length of the buttons text.
      - name: okButtonColor
        version: null
        type: string
        defaultValue: '#f8f8f8'
        description: Changes the color of the OK button text.
      - name: okButtonBackground
        version: null
        type: string
        defaultValue: '#32c682'
        description: Changes the background color of the OK button.
      - name: cancelButtonColor
        version: null
        type: string
        defaultValue: '#f8f8f8'
        description: Changes the color of the Cancel button text.
      - name: cancelButtonBackground
        version: null
        type: string
        defaultValue: '#a9a9a9'
        description: Changes the background color of the Cancel button.
# Docs: Table Confirm Content: end

# Docs: Table Loading Content: begin
_dbDocsTableLoading:
  namespace: Loading
  optionsCommon:
    sectionId: DocsLoading
    sectionType: common
    sectionTitle: 'Common Options:'
    options:
      - name: className
        version: null
        type: string
        defaultValue: 'notiflix-loading'
        description: Changes the class name (attribute).
      - name: zindex
        version: null
        type: number
        defaultValue: '4000'
        description: Changes the z-index.
      - name: backgroundColor
        version: null
        type: string
        defaultValue: 'rgba(0,0,0,0.8)'
        description: Changes the background color.
      - name: rtl
        version: null
        type: boolean
        defaultValue: 'false'
        description: 'Specifies the text direction to "right-to-left".'
      - name: fontFamily
        version: null
        type: string
        defaultValue: 'Quicksand'
        description: Changes the font-family.
      - name: cssAnimation
        version: null
        type: boolean
        defaultValue: 'true'
        description: Enables/disables CSS animations to show/hide.
      - name: cssAnimationDuration
        version: null
        type: number
        defaultValue: '400'
        description: Changes the CSS animations duration as milliseconds.
      - name: clickToClose
        version: null
        type: boolean
        defaultValue: 'false'
        description: Removes the loading indicator when it has been clicked.
      - name: customSvgUrl
        version: null
        type: string
        defaultValue: 'null'
        description: 'An external SVG icon URL can be set. Usage: <span>Notiflix.Loading.custom();</span>'
      - name: customSvgCode
        version: 'v3.2.0'
        type: string
        defaultValue: 'null'
        description: 'A text-based (string) SVG icon can be set. Single quotation marks should be avoided. Usage: <span>Notiflix.Loading.custom();</span>'
      - name: svgSize
        version: null
        type: string
        defaultValue: '80px'
        description: Changes the built-in SVG icons width and height. (Notiflix uses square scaled icons.)
      - name: svgColor
        version: null
        type: string
        defaultValue: '#32c682'
        description: Changes the built-in SVG icons color.
      - name: messageID
        version: null
        type: string
        defaultValue: 'NotiflixLoadingMessage'
        description: Changes the ID (attribute) of the loading message element.
      - name: messageFontSize
        version: null
        type: string
        defaultValue: '15px'
        description: Changes the font-size of the loading message text.
      - name: messageMaxLength
        version: null
        type: number
        defaultValue: '34'
        description: The maximum length of the loading message text.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#dcdcdc'
        description: Changes the color of the loading message text.
# Docs: Table Loading Content: end

# Docs: Table Block Content: begin
_dbDocsTableBlock:
  namespace: Block
  optionsCommon:
    sectionId: DocsBlock
    sectionType: common
    sectionTitle: 'Common Options:'
    options:
      - name: querySelectorLimit
        version: null
        type: number
        defaultValue: '200'
        description: 'Limit of the CSS selector(s) or "Array&lt;HTMLElement&gt;" or "NodeListOf&lt;HTMLElement&gt;" length.'
      - name: className
        version: null
        type: string
        defaultValue: 'notiflix-block'
        description: Changes the class name (attribute) of the block indicator/message elements wrapper.
      - name: position
        version: null
        type: string
        defaultValue: 'absolute'
        description: Changes the position of the block indicator/message elements wrapper.
      - name: zindex
        version: null
        type: number
        defaultValue: '1000'
        description: Changes the z-index of the block indicator/message elements wrapper.
      - name: backgroundColor
        version: null
        type: string
        defaultValue: 'rgba(255,255,255,0.9)'
        description: Changes the background color the block indicator/message elements wrapper.
      - name: rtl
        version: null
        type: boolean
        defaultValue: 'false'
        description: 'Specifies the text direction to "right-to-left".'
      - name: fontFamily
        version: null
        type: string
        defaultValue: 'Quicksand'
        description: Changes the font-family.
      - name: cssAnimation
        version: null
        type: boolean
        defaultValue: 'true'
        description: Enables/disables CSS animations to show/hide.
      - name: cssAnimationDuration
        version: null
        type: number
        defaultValue: '300'
        description: Changes the CSS animations duration as milliseconds.
      - name: svgSize
        version: null
        type: string
        defaultValue: '45px'
        description: Changes the built-in SVG icons width and height. (Notiflix uses square scaled icons.)
      - name: svgColor
        version: null
        type: string
        defaultValue: '#383838'
        description: Changes the built-in SVG icons color.
      - name: messageFontSize
        version: null
        type: string
        defaultValue: '14px'
        description: Changes the font-size of the block message text.
      - name: messageMaxLength
        version: null
        type: number
        defaultValue: '34'
        description: The maximum length of the block message text.
      - name: messageColor
        version: null
        type: string
        defaultValue: '#383838'
        description: Changes the color of the block message text.
# Docs: Table Block Content: end

---
