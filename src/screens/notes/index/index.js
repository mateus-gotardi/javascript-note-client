import React, {  useState } from 'react';
import Notes from '../../../components/notes';
import HeaderLogged from '../../../components/header_logged';
import '../../../styles/notes.scss'

const NotesScreen = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='notesGeneral'>
        <HeaderLogged setOpen={setOpen} isOpen={isOpen}/>
        <Notes setOpen={setOpen} isOpen={isOpen} />
    </div>
  )
};

export default NotesScreen;