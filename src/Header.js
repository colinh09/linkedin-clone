import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Header.css"
import HeaderOption from './HeaderOption'
import HomeIcon  from '@mui/icons-material/Home';
import SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';
import BuisnessCenterIcon  from '@mui/icons-material/BusinessCenter';
import ChatIcon  from '@mui/icons-material/Chat';
import NotificationsIcon  from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser} from './features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className = "header">
        <div className = "header__left">
            <LinkedInIcon color="primary" sx={{ fontSize: 40 }}/>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" type="text"></input>
            </div>
        </div>

        <div className = "header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BuisnessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption
              avatar={true}
              title='me'
              onClick={logoutOfApp}
            />
        </div>

    </div>
  )
}
export default Header