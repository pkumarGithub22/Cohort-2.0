import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([
    {
      title: 'Note 1',
      description: 'This is the content of note 1'
    },
    {
      title: 'Note 2',
      description: 'This is the content of note 2'
    },
    {
      title: 'Note 3',
      description: 'This is the content of note 3'
    },
    {
      title: 'Note 4',
      description: 'This is the content of note 4'
    }
  ])
  console.log("hello")

  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((response) => {
        setNotes(response.data.notes)
      })
      .catch((error) => {
        console.error('Error fetching notes:', error)
      })

  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    console.log(title.value, description.value)
    axios.post('http://localhost:3000/api/notes', {
      title: title.value,
      description: description.value
    })
      .then((response) => {
        console.log(response.data)
        fetchNotes()
      })
      .catch((error) => {
        console.error('Error creating note:', error)
      })
  }

  function handleDelete(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then((response) => {
        console.log(response.data)
        fetchNotes()
      })
      .catch((error) => {
        console.error('Error deleting note:', error)
      })

  }
  function handleUpdate(noteId, updated) {
    axios.patch(`http://localhost:3000/api/notes/${noteId}`, { title: updated, description: updated})
      .then((response) => {
        console.log(response.data)
        fetchNotes()
      })
      .catch((error) => {
        console.error('Error updating note:', error)
      })    

  }

  return (
    <>

      <form className='note-create-form' onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder='Enter Title' />
        <input type="text" name="description" placeholder='Enter Description' />
        <button type="submit">Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map((note) => {
            return (
              <div className="note">
                <h1>{note.title}</h1>
                <p>{note.description}</p>
                <button onClick={() => handleDelete(note._id)}>Delete</button>
                <button onClick={()=> handleUpdate(note._id, note.description)}>Update</button>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default App
