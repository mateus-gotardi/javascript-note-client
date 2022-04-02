import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'

function Search(props) {
    const [query, setQuery] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('pesquisando')
            props.searchNote(query)
        }
    }

    return (
        <div className='searchinput'>
            <input
                className='input'
                type="text"
                name={query}
                value={query}
                placeholder="Search note..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown} />
            <div className='cross' onClick={()=>{
                props.fetchNotes()
                setQuery('')
                }}>
                <FaTimes/>
            </div>
        </div>
    )
}

export default Search;