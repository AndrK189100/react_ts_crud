import './container.css'
import Note from '../note/note';
import uuid from 'react-uuid';

type Note = {
    id: string;
    content: string;
  }

type Handler = (a: string) => void;

type Props = {
    notes: Note[];
    handler: Handler;
}

export default function Container(props: Props) {

    const {notes, handler} = props;

    return (
        <div className='container'>
        {notes.map((note: Note) => {
            return(
                <Note key={uuid()} id={note.id} content={note.content} handler={handler} />
            )
        })}
        </div>
    )
}