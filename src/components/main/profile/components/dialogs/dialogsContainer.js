import React from 'react';
import {connect} from 'react-redux';

import Dialogs from './dialogs';
import {withAuthRedirect} from '../../../hoc/authRedirect';
import {getM} from '../../../../../redux/profile-reducer';
import { compose } from 'redux';

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
export default compose(
    connect(mapStateToProps,{getM}),
    withAuthRedirect
)(DialogsContainer);
