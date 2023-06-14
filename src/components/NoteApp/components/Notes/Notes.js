import { useState } from "react"
import CreateNote from "./components/CreateNote"
import Note from "./components/Note"
import { v4 as uuid } from "uuid"

import "./Notes.css"

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  const [inputText, setInputText] = useState("")

  //get text and store in state
  const textHandler = (e) => {
    return (
      setInputText(e.target.value)
    )
  }

  //add new note to the notes state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      }
    ])
    //clear the textarea
    setInputText("")
  }

  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes)
  }
  console.log('notes',notes)

  return (
    <div className="notes" >
      {notes.map((note) => (
        <Note
          key={note.id}
          // id={note.id}
          // text={note.text}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote 
      textHandler={textHandler} 
      saveHandler={saveHandler} 
      inputText={inputText} />
    </div >
  )
}

export default Notes