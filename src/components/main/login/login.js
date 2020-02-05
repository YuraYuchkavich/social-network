import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input}  from '../../common/FormsControl/FormsControls';
import {required,maxLehgthCreator} from '../../../utils/validators/validators';

const LoginForm = (props) =>{
    let maxLehgth = maxLehgthCreator(15);
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={"Login"} name={"login"} component={Input} validate = {[required]}/>
                    </div>
                    <div>
                        <Field placeholder={"Password"} name={"password"} component={Input} validate = {[required]}/>
                    </div>
                    <div>
                        <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>

                </form>
    )  
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)



const Login = (props) =>{
    const onSubmit = (formData) =>{

    }
    return  <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit = {onSubmit}/>
            </div>
}

export default Login;
