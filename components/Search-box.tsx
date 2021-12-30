import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 

const SearchBox = (props) => {
    const [value, setValue] = useState("");

    function handleOnClick() {
        console.log(value);
    }
    
    return (
        <>
        <form
            onSubmit = {e => { 
                e.preventDefault();
            }}      
        >
            <div className="search-box" >
                <input 
                    className="search-box__input"
                    type="text"
                    placeholder="Search" 
                    value={value} 
                    onChange={e => setValue(e.target.value)} />
                <button className="search-box__btn" type="submit" onClick={handleOnClick}>   
                    <FontAwesomeIcon icon={faSearch} style={{width: '20px'}}/>
                </button>
            </div>
        </form>
        </>
    )
}

export default SearchBox;