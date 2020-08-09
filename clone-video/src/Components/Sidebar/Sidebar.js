import React from 'react'
import './Sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SidebarRow from './SidebarRow/SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Главная" />
            <SidebarRow Icon={WhatshotIcon} title="Тренды" />
            <SidebarRow Icon={SubscriptionsIcon} title="Подписки" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Библиотека" />
            <SidebarRow Icon={HistoryIcon} title="История" />
            <SidebarRow Icon={OndemandVideoIcon} title="Ваши видео" />
            <SidebarRow Icon={WatchLaterIcon} title="Смотреть позже" />
            <SidebarRow Icon={ThumbUpIcon} title="Понравившиеся" />
            <SidebarRow Icon={ExpandMoreIcon} title="Развернуть" />
            <hr />
        </div>
    )
}

export default Sidebar
