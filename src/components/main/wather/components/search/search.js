import React from 'react';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './search.css';


const Search = (props) => {
  
    let myRef = React.createRef();
    let search = ()=>{  
        props.search(myRef.current.value);
    }
    let searchChange = ()=>{  
        let a = myRef;
       
        props.searchChange(myRef.current.value);
    }
// onChange = {searchChange}
//value = {props.newSearch}
        return (
            <div className = "Search">
            
            <input ref = {myRef} ></input>
            <button onClick={search}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        )
    }

export default Search;
