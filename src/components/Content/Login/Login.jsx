import React from 'react';
import classes from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../../common/FormsControl/FormsControl';
import { required } from '../../../utilities/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name='email' placeholder='Email' />
            </div>
            <div>
                <Field component={Input} validate={[required]} name='password' type='password' placeholder='Password' />
            </div>
            <div>
                <Field component='input' name='remeberMe' type='checkbox' />remember me
            </div>
            {props.error && 
                <div className={classes.error}>
                    ERROR
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = reduxForm({form: 'login'})(LoginForm)

export default Login;