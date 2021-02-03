import React from 'react';
import { setUsersAC } from '../../../redux/users-reducer';
import classes from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/doc63bprnt2j1416ghtqit_800_480-300x215.jpg', 
            followed: true, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/374758_2_1362480463-300x188.jpg', 
            followed: false, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/Evolyutsiya-Mark-Uolberg-1024x683-300x200.jpg', 
            followed: true, fullName: 'Dimych', status: 'I am so pretty', location: {city: 'Dnepr', country: 'Ukraine'}},
            {id: 4, photoUrl: 'https://wsjournal.ru/wp-content/uploads/2016/08/8b263aefbd910b902805a6cb3ff9c6d5-300x201.jpg ', 
            followed: true, fullName: 'Andrew', status: 'I like football!', location: {city: 'Kiev', country: 'Ukraine'}}
        ])
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <div>
                        <img src={u.photoUrl} alt="img"/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                    <div>
                        <ul>
                            <li>{u.fullName}</li>
                            <li>{u.status}</li>
                            <li>{u.location.city}</li>
                            <li>{u.location.country}</li>
                        </ul>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;