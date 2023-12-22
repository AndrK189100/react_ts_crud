import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/container/container'
import Note from './components/note/note'
import NoteForm from './components/noteform/noteform'

const url = 'http://localhost:7070/notes';

type Note = {
  id: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const response = await fetch(url);
    setNotes([...await response.json()])
    setLoading(false);
    
  }

  const addNote = async (content: string) => {
    const {ok} = await fetch(url,{
                                  method: 'POST', 
                                  headers: {'Content-Type': 'application/json'},
                                  body: JSON.stringify({id: '0', content: content})
                                }
                            );
    if(ok) loadData();
  }

  const delNote = async (id: string) => {
    const {ok} = await fetch(url + `/${id}`, {method: 'DELETE'});
    
    if(ok) loadData();
  }

  const onReload = () => {
    loadData();
  }

  useEffect(()=>{
    loadData();
    
  },[])

  return (
    <>
    {loading ? (<div>loading</div>) : 
    <>
      <div className='update'>
        <div className='update-title'>Заметки</div>
        <div className='update-button' onClick={onReload}>change_circle</div>
      </div>
      <Container notes={notes} handler={delNote}/>
      <NoteForm handler={addNote}/>
      </>
      }
    </>
  )
}

export default App
