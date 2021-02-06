import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setTotalUsersCount, setCurrentPage, isUsersFetching } from '../../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../../common/Prelouder';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isUsersFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(Response => {
            this.props.isUsersFetching(false);
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount)
        });
    }
    onPageChanged = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        this.props.isUsersFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pagesSize}`).then(Response => {
            this.props.isUsersFetching(false);
            this.props.setUsers(Response.data.items)
    });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount} 
        pagesSize={this.props.pagesSize}  
        currentPage={this.props.currentPage}  
        onPageChanged={this.onPageChanged}  
        users={this.props.users}  
        unfollow ={this.props.unfollow} 
        follow={this.props.follow} />
        </>
    }          
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, isUsersFetching})(UsersContainer)
