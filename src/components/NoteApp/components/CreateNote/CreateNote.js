import NoteInput from "./components/NoteInput"
import NoteCountDown from "./components/NoteCountDown"
import NoteSave from "./components/NoteSave"
import ProgressBar from "./components/ProgressBar/ProgressBar"


const CreateNote = () => (
  <div>
    <NoteInput />
    <NoteCountDown />
    <ProgressBar />
    <NoteSave />
  </div>
)

export default CreateNote