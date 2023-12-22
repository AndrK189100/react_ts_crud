import './note.css'

type Handler = (a: string) => void;

export default function Note({id, content, handler}:{id: string, content: string, handler: Handler}) {

    const onDelete = (e: React.BaseSyntheticEvent) => {
            e.preventDefault();
            handler(e.target.parentElement.id);

    }

    return(
        <div id={id} className='note'>
            <div className='del-button' onClick={onDelete}>close</div>
            {content}
        </div>
    )
}