import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='Sidebar'>

        <SidebarRow Icon={HomeIcon}title="Home"/>
        <SidebarRow Icon={WhatshotIcon}title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon}title="Subscription"/>
        <hr/>
        <SidebarRow Icon={LibraryAddIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
    </div>
  )
}

export default Sidebar