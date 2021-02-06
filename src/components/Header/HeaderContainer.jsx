import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(Response => {
            if  (Response.data.resultCode === 0) {
                let {id, login, email} = Response.data.data;
                this.props.setAuthUserData(id, login, email)
            }
        })
        
    }

    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);