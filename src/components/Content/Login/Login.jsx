import React from 'react';
import classes from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../../common/FormsControl/FormsControl';
import { required } from '../../../utilities/validators';
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name={'login'} placeholder={'Login'} />
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={'Password'} />
            </div>
            <div>
                <Field component={'input'} name={'remeberMe'} type={'checkbox'} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;