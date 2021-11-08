---
_dbPageMeta:
  routeId: CONFIRM
  lastModifiedDate: '2021-11-08' # YYYY-MM-DD
  title: Confirm | Notiflix
  description: 'Notiflix Confirm module can be used to show non-blocking confirm/prompt boxes. This module includes 3 types of confirm/prompt: "Show", "Ask", and "Prompt". An additional question can be asked within the prompt box if using the "Ask" and/or "Prompt" ones unlike the "Show" one.'
  robots: index, follow, noodp, noydir
  ogImage: null
  themeColor: null

_dbConfirmBanner:
  importNamespace: Confirm
  title: Confirm
  description: 'Notiflix Confirm module can be used to show non-blocking confirm/prompt boxes. This module includes 3 types of confirm/prompt: "Show", "Ask", and "Prompt". An additional question can be asked within the prompt box if using the "Ask" and/or "Prompt" ones unlike the "Show" one.'
  importPath: 'notiflix/build/notiflix-confirm-aio'
  importDescription: (A) Import as a Module
  htmlDescription: (B) Add to an HTML page (Global)
  htmlOnlyThis: (B1) Confirm Module, only JS (All in One => Internal CSS)
  htmlOnlyThisJS: dist/notiflix-confirm-aio-X.X.X.min.js
  htmlOneByOne: (B2) All Modules, CSS and JS
  htmlOneByOneCSS: dist/notiflix-X.X.X.min.css
  htmlOneByOneJS: dist/notiflix-X.X.X.min.js
  htmlAllInOne: (B3) All Modules, only JS (All in One => Internal CSS)
  htmlAllInOneJS: dist/notiflix-aio-X.X.X.min.js

_dbConfirmPlayground:
  title: Playground
  namespace: Confirm
  methods:
    show:
      id: SHOW
      functionName: show
      infoDescription: This method can be used to show a confirm box with info, and take the custom actions via the callback functions. <br/><br/>The title, the message/question, the OK button text, and the Cancel button text are the first four parameters in string format. The fifth and the sixth parameters are callback functions that are related to the OK and the Cancel button elements in order. The seventh and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.
      infoDocsLinkText: All Options
      infoDocsLinkRouteHash: "#DocsConfirm"
      usageInfoTitle: Usage
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
      infoDescription: This method can be used to ask a question within a confirm box. The confirm box doesn't remove till the client gives the correct answer. Or, the client can click on the cancel button to close/remove the confirm box as well. <br/><br/>The title, the question, the answer to the question, the OK button text, and the Cancel button text are the first fifth parameters in string format. The sixth and the seventh parameters are callback functions that are related to the OK and the Cancel button elements in order. The eighth and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.
      infoDocsLinkText: All Options
      infoDocsLinkRouteHash: "#DocsConfirm"
      usageInfoTitle: Usage
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
    prompt:
      id: PROMPT
      functionName: prompt
      infoDescription: This method works similarly as "window.prompt()". The client doesn't have to type a correct answer to the input element to proceed unlike the "ask()" method. The client answer passes to the callback functions as a parameter and this parameter is always a string. <br/><br/>The title, the question, the default answer to the question, the OK button text, and the Cancel button text are the first fifth parameters in string format. The sixth and the seventh parameters are callback functions that are related to the OK and the Cancel button elements in order. The eighth and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.
      infoDocsLinkText: All Options
      infoDocsLinkRouteHash: "#DocsConfirm"
      usageInfoTitle: Usage
      comments:
        - "@param1 {string}: Required, title text in string format."
        - "@param2 {string}: Required, question text in string format."
        - "@param3 {string}: Required, default answer text in string format. An empty string can be used as well."
        - "@param4 {string}: Required, OK button text in string format."
        - "@param5 {string}: Optional, Cancel button text in string format."
        - "@param6 {function}: Optional, a callback function that will be called when the OK button element has been clicked."
        - "@param7 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked."
        - "@param8 {Object}: Optional, extending the initialize options with new the options for each confirm box."
      defaultValueTitle: Hello
      defaultValueQuestion: How are you feeling?
      defaultValueAnswer: Awesome!
      defaultValueButtonOk: Answer
      defaultValueButtonOkCallbackFn: okCb
      defaultValueButtonOkCallbackTxt: "Client answer is: "
      defaultValueButtonCancel: Cancel
      defaultValueButtonCancelCallbackFn: cancelCb
      defaultValueButtonCancelCallbackTxt: "Client answer was: "
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
