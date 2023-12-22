import './noteform.css'

type Handler = (a: string) => void;

export default function NoteForm({handler}:{handler:Handler}) {

    const onClick = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        handler(e.target.previousElementSibling.value);
        e.target.previousElementSibling.value = '';

    }

    return (
        <div className='new-note'>
            <textarea className='note-text'></textarea>
            <div className='add-button' onClick={onClick}>expand_circle_down</div>
        </div>
    )
}