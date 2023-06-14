import NoteInput from "./components/NoteInput"
import NoteCountDown from "./components/NoteCountDown"
import NoteSave from "./components/NoteSave"
import ProgressBar from "./components/ProgressBar/ProgressBar"

import "../../css/note.css"
// import { useState } from "react"

const CreateNote = ({textHandler,saveHandler,inputText}) => {
   //character limit
   const charLimit = 100;
   const charLeft = charLimit - inputText.length;

  return (
    <div className="note">
      <NoteInput textHandler={textHandler} inputText={inputText} />
      <div className="note__footer">
        <NoteCountDown charLeft={charLeft} />
        <NoteSave saveHandler={saveHandler} />
      </div>
      <ProgressBar  charLeft={charLeft}  />
    </div>
  )
}

export default CreateNote