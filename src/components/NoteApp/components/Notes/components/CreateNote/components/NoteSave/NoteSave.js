import './NoteSave.css'

const NoteSave =({saveHandler})=>(
  <div>
    <button className='note__save' onClick={saveHandler}>Save</button>
  </div>
)

export default NoteSave