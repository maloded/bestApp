import React from 'react';
import Login from './Login';
import { login} from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const LoginContainer = (props) => {

    let loginMe = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <h2>Login</h2>
            <Login onSubmit={loginMe} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginContainer);