import React from 'react';
import Moment from 'react-moment';
import '../../../styles/notesindex.scss'
import { MdOutlineDeleteForever } from 'react-icons/md'

function ListNotes(props) {
    const active = (item) => {
        return (
            item === props.current_note
        )
    }
    return (
        <div className='notesindex'>
            <div className='numberofnotes'>
                <h1 className='title is-6 '>
                    {props.notes.length} Notes
                </h1>
                <div className='tag' onClick={() => { props.createNote() }}>
                    Note +
                </div>
            </div>
            <ul className="notes-list">
                {props.notes.map((item, key) =>
                    <li className='listagem' key={key} onClick={() => props.selectNote(item._id)}>
                        <div className='box' id={active(item) ? 'active' : 'noAcive'}>
                            <h2 className='title is-6 mb-3'>
                                {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                            </h2>
                            <h2 className='title is-7 mb-3'>
                                {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                            </h2>
                            <div className='foot'>
                                <span className="tag">
                                    <Moment format="YYYY/MM/DD">
                                        {item.created_at}
                                    </Moment>
                                </span>
                                <MdOutlineDeleteForever className='deleteIcon' onClick={() => { props.deleteNote(item._id) }} />
                            </div>

                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ListNotes;