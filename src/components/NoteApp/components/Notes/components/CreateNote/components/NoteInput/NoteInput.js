import "./NoteInput.css"

const NoteInput =({textHandler,inputText})=>(
  <div>
  <textarea 
  onChange={textHandler}
  value={inputText}
  cols="10" 
  rows="5" 
  placeholder="Type..." 
  maxLength="100">
    </textarea>
</div>
)

export default NoteInput