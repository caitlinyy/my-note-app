import NoteInput from "./components/NoteInput"
import NoteCountDown from "./components/NoteCountDown"
import NoteSave from "./components/NoteSave"
import ProgressBar from "./components/ProgressBar/ProgressBar"

import "../../css/note.css"

const CreateNote = () => (
  <div className="note">
    <NoteInput />
    <div className="note__footer">
    <NoteCountDown />
    <NoteSave />
    </div>
    <ProgressBar />
    
  </div>
)

export default CreateNote