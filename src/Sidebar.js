import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eac0f70640261e09152340f13b79144&auto=format&fit=crop&w=2050&q=80" alt=" " />
            <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className = "sidebar__stats">
            <div className = "sidebar__stat">
                <p>Who Viewed You</p>
                <p className="sidebar__statNumber">78</p>
            </div>

            <div className = "sidebar__stat">
                <p>Views on Posts</p>
                <p className="sidebar__statNumber">458</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div> 
    </div>
  )
}

export default Sidebar