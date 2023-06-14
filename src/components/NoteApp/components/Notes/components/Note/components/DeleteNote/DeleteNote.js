import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined'

import "./DeleteNote.css"

const DeleteNote = ({note,deleteNote}) => (
  <div>
    <DeleteForeverOutlined 
    onClick={()=>deleteNote(note.id)}
    className="note__delete" 
    aria-hidden='true' 
     />
  </div>
)

export default DeleteNote