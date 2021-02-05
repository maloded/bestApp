import React from 'react';
import classes from './Users.module.css'
import Photo from '../../../assets/images/kisspng-user-logo-information-service-design-5ba34f88e63387.4679724515374293849429.png';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount)
        });
    }
    onPageChanged (pageNamber) {
        this.props.setCurrentPage(pageNamber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pagesSize}`).then(Response => {
            this.props.setUsers(Response.data.items)
    });
    }

    render() {

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pagesSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
debugger;
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p ? classes.selectedPage : classes.page} onClick={ () => {this.onPageChanged(p)} }>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map( u => <div key={u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : Photo} alt="img" className={classes.smallPhoto} />
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button> 
                            : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>}
                        </div>
                        <div>
                            <ul>
                                <li>{u.name}</li>
                                <li>{u.status != null ? u.status : "no status"}</li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

    export default Users;