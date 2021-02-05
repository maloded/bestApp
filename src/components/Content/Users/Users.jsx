import React from 'react';
import classes from './Users.module.css'
import Photo from '../../../assets/images/kisspng-user-logo-information-service-design-5ba34f88e63387.4679724515374293849429.png';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            this.props.setUsers(Response.data.items)
        });
    }

    render() {
        return (
            <div>
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