import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import Dialogs from './dialogs';

import {getM} from '../../../../../redux/profile-reducer';

class DialogsContainer extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    
        this.props.getM()

 
    }


    render(){

        
        return <Dialogs isAuth = {this.props.isAuth}/>
        
    }
}


let mapStateToProps = (state) => {
    return {
        isAuth:state.authReducer.isAuth
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}*/

let AuthRedirectComponent = (props) =>{
    if (props.isAuth == false) return <Redirect to = {"/login"}/>
    return <DialogsContainer {...props}/>
}

export default connect(mapStateToProps,{getM})(AuthRedirectComponent);