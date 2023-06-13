import DeleteNote from "./components/DeleteNote"
import NoteContent from "./components/NoteContent"
import "../../../css/note.css"

const Note = () => (
  <div className="note">
    <div className="note__body">
      <NoteContent />
    </div>
    <div className="note__footer">
      <DeleteNote />
    </div>
  </div>
)
export default Note