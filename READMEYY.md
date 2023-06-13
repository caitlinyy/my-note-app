-npm install -g create-react-app
-npx create-react-app my-note-app
-cd my-react-app
-npm install @mui/icons-material @mui/material
-npm i @emotion/react @emotion/styled uuid loader-utils
-git init

- App (渲染App的样式，背景图片和布局)
  - NoteApp (渲染 NoteApp 的样式，细节样式 + 布局)
    - Header (渲染 Header 布局样式细节样式)
    
    - Notes (渲染 Notes 样式，布局和统筹所有 Note)
      - Note (Note 样式，布局和统筹所有Note)
        - NoteContent (渲染 NoteContent 样式细节样式)
        - DeleteNote (渲染 DeleteNote 样式细节样式)
      - CreateNote (渲染 CreateNote 样式，布局和统筹)
        - NoteInput  (渲染 NoteInput 样式细节样式)
        - NoteCountDown  (渲染 NoteCountDown 样式细节样式)
        - ProgressBar  (渲染 ProgressBar 样式细节样式)
        - NoteSave (渲染 NoteSave 样式细节样式)

    

(Global Components)

