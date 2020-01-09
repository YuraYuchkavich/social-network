import React from 'react';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import SpeechRecognition from 'react-speech-recognition'

import './search.css';
import Speech from './speech.js';


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
            <div className = "Search" >
                <div className = "form input-group mb-3" >
                    <input  className="form-control"  ref = {myRef}  type="text"></input>
                    <div className="input-group-append">
                        <Speech search = {props.search} />
                        <button  className="btn btn-outline-secondary" onClick={search}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </div>
        )
    }

export default Search;
