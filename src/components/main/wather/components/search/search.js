import React from 'react';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './search.css';
import {createobjectsearch} from '../../../../../redux/store';
import {createobjectsearchUpdate} from '../../../../../redux/store';


const Search = (props) => {
  
    let myRef = React.createRef();
    let search = ()=>{  
        let action = createobjectsearch(myRef.current.value);
        props.dispatch(action);
    }
    let searchChange = ()=>{  
        let action = createobjectsearchUpdate(myRef.current.value);
        props.dispatch(action);
    }
    debugger;
        return (
            <div className = "Search">
            
            <input ref = {myRef} onChange = {searchChange} value = {props.state.newSearch}></input>
            <button onClick={search}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        )
    }

export default Search;
