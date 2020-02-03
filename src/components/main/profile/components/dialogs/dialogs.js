import React from 'react';



import styles from './dialogs.module.css';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';


const Dialogs = (props) => {
debugger;
    //if (props.isAuth == false) return <Redirect to = {"/login"}/>
    let myRef = React.createRef();
    let search = ()=>{  
        props.search(myRef.current.value);
    }
    let searchChange = ()=>{  
        let a = myRef;
       
        props.searchChange(myRef.current.value);
    }
    return <div> 
            <input  className="form-control SearchInput"  ref = {myRef}  type="text"></input>
                <div className="input-group-append">
            <button  className="btn btn-secondary" onClick={search}>Oтправить </button>
                </div>
         </div>
}

export default Dialogs;