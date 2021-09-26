---
_dbMeta:
  routeId: CONFIRM
  lastModifiedDate: '2021-10-29' # YYYY-MM-DD
  title: Confirm | Notiflix
  description: 'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.'
  robots: noindex, nofollow, noodp, noydir # TODO: index, follow
  ogImage: null
  themeColor: null

_dbConfirmBanner:
  importNamespace: Confirm
  title: Confirm
  description: 'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOneByOne: (B1) CSS and JS
  htmlOneByOneCSS: ../dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: ../dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B2) or only JS (All in One => Internal CSS)
  htmlAllInOneJS: ../dist/notiflix-aio-X.X.X.min.js

_dbConfirmPlayground:
  title: Playground
  namespace: Confirm
  methods:
    show:
      id: SHOW
      functionName: show
      infoDescription: The title, the message/question, the OK button text, and the Cancel button text are the first four parameters in string format. The fifth and the sixth parameters are callback functions that are related to the OK and the Cancel button elements in order. The seventh and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.
      infoDocsLinkText: All Options
      infoDocsLinkRouteHash: "#DocsConfirm"
      comments:
        - "@param1 {string}: Required, title text in string format."
        - "@param2 {string}: Required, message/question in string format."
        - "@param3 {string}: Required, OK button text in string format."
        - "@param4 {string}: Optional, Cancel button text in string format."
        - "@param5 {function}: Optional, a callback function that will be called when the OK button element has been clicked."
        - "@param6 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked."
        - "@param7 {Object}: Optional, extending the initialize options with new the options for each confirm box."
      defaultValueTitle: Notiflix Confirm
      defaultValueQuestion: Do you agree with me?
      defaultValueButtonOk: "Yes"
      defaultValueButtonOkCallbackFn: okCb
      defaultValueButtonOkCallbackTxt: "Thank you."
      defaultValueButtonCancel: "No"
      defaultValueButtonCancelCallbackFn: cancelCb
      defaultValueButtonCancelCallbackTxt: "If you say so..."
      defaultValueOptionsComment: Custom options
      demoInfoTitle: Demo
      demoInputPlaceholderTitle: Title
      demoInputPlaceholderQuestion: Message
      demoInputPlaceholderOkButton: OK Button
      demoInputPlaceholderCancelButton: Cancel Button
      demoInputPlaceholderOkButtonCallback: OK alert message
      demoInputPlaceholderCancelButtonCallback: Cancel alert message
      demoButtonText: Send
    ask:
      id: ASK
      functionName: ask
      infoDescription: The title, the question, the answer to the question, the OK button text, and the Cancel button text are the first fifth parameters in string format. The sixth and the seventh parameters are callback functions that are related to the OK and the Cancel button elements in order. The eighth and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.
      infoDocsLinkText: All Options
      infoDocsLinkRouteHash: "#DocsConfirm"
      comments:
        - "@param1 {string}: Required, title text in string format."
        - "@param2 {string}: Required, question text in string format."
        - "@param3 {string}: Required, answer text in string format."
        - "@param4 {string}: Required, OK button text in string format."
        - "@param5 {string}: Optional, Cancel button text in string format."
        - "@param6 {function}: Optional, a callback function that will be called when the OK button element has been clicked."
        - "@param7 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked."
        - "@param8 {Object}: Optional, extending the initialize options with new the options for each confirm box."
      defaultValueTitle: Where is Padmé?
      defaultValueQuestion: Is she safe? Is she all right?
      defaultValueAnswer: It seems, in your anger, you killed her.
      defaultValueButtonOk: "Answer"
      defaultValueButtonOkCallbackFn: okCb
      defaultValueButtonOkCallbackTxt: "😡 NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!"
      defaultValueButtonCancel: "Cancel"
      defaultValueButtonCancelCallbackFn: cancelCb
      defaultValueButtonCancelCallbackTxt: "😪 ..."
      defaultValueOptionsComment: Custom options
      demoInfoTitle: Demo
      demoInputPlaceholderTitle: Title
      demoInputPlaceholderQuestion: Question
      demoInputPlaceholderAnswer: Answer
      demoInputPlaceholderOkButton: OK Button
      demoInputPlaceholderCancelButton: Cancel Button
      demoInputPlaceholderOkButtonCallback: OK alert message
      demoInputPlaceholderCancelButtonCallback: Cancel alert message
      demoButtonText: Send

---