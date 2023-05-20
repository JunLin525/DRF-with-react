import React, { useState, useEffect } from 'react'
import moduleName from '../components/Listitem'
const NoteListPage = () => {

    let [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')//package.json have proxy so no need full ip or url
        let data = await response.json()
        setNotes(data)
    }

  return (
    <div className="notes">
      <div className="notes-header">
          <h2 className="notes-title">&#9782;</h2>
          <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
            {notes.map((note, index) =>(
                <h3 key={index}>{note.body}</h3>
            ))}
      </div>
    </div>
  )
}

export default NoteListPage
