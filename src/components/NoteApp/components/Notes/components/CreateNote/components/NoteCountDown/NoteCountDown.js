import "./NoteCountDown.css"
const NoteCountDown = ({charLeft}) => {
  return (
    <div>
      <span className='label'> {charLeft} words Left</span>
    </div>
  )
}

export default NoteCountDown