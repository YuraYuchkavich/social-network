import React from 'react';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './search.css';
import {createobjectsearch} from '../../../../../redux/state';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    search = ()=>{  
        let action = createobjectsearch(this.myRef.current.value);
        this.props.dispatch(action);
    }
    render(){
        return (
            <div className = "Search">
            
            <input ref = {this.myRef}></input>
            <button onClick={ this.search}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        )
    }

    }

export default Search;
