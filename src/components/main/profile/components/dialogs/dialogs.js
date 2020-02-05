import React from 'react';
import { reduxForm, Field } from 'redux-form';

import styles from './dialogs.module.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import {required,maxLehgthCreator} from '../../../../../utils/validators/validators';
import {TextArea} from '../../../../common/FormsControl/FormsControls';

const maxLehgth =  maxLehgthCreator(10)

const Dialogs = (props) => {
debugger;
    
    let addNewMessage = (value) =>{
      //value.newMessageBody
       
    } 
    return <div> 
           <AddMessageFormRedux onSubmit = {addNewMessage}/>
         </div>
}


const AddMessageform = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name = "newMessageBody" placeholder="Enter your message" validate = {[required,maxLehgth]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({
    form:"dialogAddMessageForm"
})(AddMessageform)

export default Dialogs;
