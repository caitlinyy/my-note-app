import CreateNote from "./components/CreateNote"
import Note from "./components/Note"

import "./Notes.css"

const Notes = () =>(
  <div className="notes">
    <Note />
    <Note />
    <CreateNote />
  </div>
)

export default Notes