import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsersPage } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Prelouder';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersPage(this.props.currentPage, this.props.pagesSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount} 
        pagesSize={this.props.pagesSize}  
        currentPage={this.props.currentPage}  
        users={this.props.users}  
        unfollow ={this.props.unfollow} 
        follow={this.props.follow} 
        followingInProgress={this.props.followingInProgress}
        getUsersPage={this.props.getUsersPage} />
        </>
    }          
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsersPage})(UsersContainer)
