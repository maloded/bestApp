import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setTotalUsersCount, setCurrentPage, isUsersFetching } from '../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../common/Prelouder';
import { usersAPI } from '../../../API/api';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isUsersFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pagesSize).then(data => {
            this.props.isUsersFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }
    onPageChanged = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        this.props.isUsersFetching(true);
        usersAPI.getUsers(pageNamber, this.props.pagesSize).then(data=> {
            this.props.isUsersFetching(false);
            this.props.setUsers(data.items);
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
