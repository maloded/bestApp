import React from 'react';
import classes from './Users.module.css'
import Photo from '../../../assets/images/kisspng-user-logo-information-service-design-5ba34f88e63387.4679724515374293849429.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pagesSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? classes.selectedPage : classes.page} onClick={ () => {props.onPageChanged(p)} }>{p}</span>
                    })
                }
            </div>
            {
                props.users.map( u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}> 
                            <img src={u.photos.small != null ? u.photos.small : Photo} alt="img" className={classes.smallPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
                        : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
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

export default Users;