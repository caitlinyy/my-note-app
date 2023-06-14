import DeleteNote from "./components/DeleteNote"
import NoteContent from "./components/NoteContent"
import "../../css/note.css"

const Note = ({ note, deleteNote }) => (
  <div className="note">
    <div className="note__body">
      <NoteContent note={note} />
    </div>
    <div className="note__footer">
      <DeleteNote note={note} deleteNote={deleteNote} />
    </div>
  </div>
)
export default Note