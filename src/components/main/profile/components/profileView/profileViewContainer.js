import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter,Redirect } from 'react-router-dom';

import ProfileView from './profileView';
import './profileView.module.css';
//import {getProfileData} from '../../../../../redux/profile-reducer';
import {withAuthRedirect} from '../../../hoc/authRedirect';


class ProfileViewContainer extends React.Component {
    constructor(props){
        super(props);
    }
   
    componentDidMount(){
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            userId = 2;
        }
        debugger;
        //this.props.getProfileData(userId)

 
    }
  
    render(){
        return  <ProfileView profile = {this.props.profile}
                             isAuth = {this.props.isAuth} /> 
    }
}


let mapStateToProps = (state) => {
    return {
       profile:state.profileReducer.profile,
       isAuth:state.authReducer.isAuth
     
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(personsFetchData(url))
   
} }*/

let AuthRedirectComponent = withAuthRedirect(ProfileViewContainer);



let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{})(WithUrlDataContainerComponent);