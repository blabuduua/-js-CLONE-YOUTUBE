import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <MenuIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>
            </div>

            <div className="header__center">
                <input type="text" placeholder="Поиск..." />
                <SearchIcon className="header__center_input_button"/>
            </div>

            <div className="header__right">
                <VideoCallIcon className="header__right_icons"/>
                <AppsIcon className="header__right_icons"/>
                <NotificationsIcon className="header__right_icons"/>
                <Avatar alt="blabuduua" src="https://avatars2.githubusercontent.com/u/31963350?s=400&v=4"/>
            </div>
        </div>
    )
}

export default Header
