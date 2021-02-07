import React from 'react';
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);