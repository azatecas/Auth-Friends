import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const Friends = () => {
    const [friends, setFriends ] = useState({
        friendsList: []
    })
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get(`api/friends`)
            .then(res => {
                console.log('this is res', res.data)
                setFriends({
                    ...friends,
                    friendsList: res.data
                })
            })
            .catch(error => {
                console.log('friends error',error);
            })        
    };
    const history = useHistory();
    const seeFriend = (oneFriend) => {
        axiosWithAuth()
            .get(`/api/friends/${oneFriend.id}`)
            .then(res => {                
                history.push(`/Friends/${oneFriend.id}`)
                console.log('this is friend',res.data);
                
            })
            .catch (err => console.log('error friend click', err))

    }

    useEffect(() => {
        getData();
    }, []);

    const handleChange = e => {
        setNewFriend({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/api/friends`, newFriend)
            .then(res => {                
                console.log('POST friend',res.data);
                setFriends({
                    ...friends,
                    friendsList: res.data
                })
            })
            .catch (err => console.log('error friend click', err))
    }

    return (
        <div >
            <h1>MY BEST FRIENDS FOREVER ❤</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                    required
                />
                <label>Age</label>
                <input 
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                    required
                />
                <label>email</label>
                <input 
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>New Bestie ❤</button>
            </form>
            <div className="friend-cont">
            {friends.friendsList.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>age: {friend.age}</p>
                    <p>{friend.email}</p>
                    <button onClick={()=>{seeFriend(friend)}}className="friend-btn">See</button>
                </div>
                
            ))}
            </div>
        </div>
    )
}

export default Friends;