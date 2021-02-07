import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';
import { authAPI } from '../../API/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getMe().then(data => {
            if  (data.resultCode === 0) {
                let {id, login, email} = data.data;
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