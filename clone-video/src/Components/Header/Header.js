import React, { useState } from 'react'
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className="header">
            <div className="header__menu">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
                </Link>
            </div>

            <div className="header__center">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Поиск..." />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__center_input_button" />
                </Link>
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