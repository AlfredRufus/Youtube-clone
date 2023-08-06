import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router';
import logo from "./icon-720944_1280.webp";

import { Avatar } from '@mui/material';
function Header() {

  return (
    <div className='header'>
        
        <div className='header__left'>
        <MenuIcon/>
        <img 
        className='header__logo'
        src={logo} alt="yt"/>
       
        </div>


        <div className='header__input'>
        <input  placeholder="Search"type='text'/>
    
        <SearchIcon className = "header__inputbutton"/>
        
        
        </div>

        

        <div className='header__icons'>
        <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar className='header__icon'/>
        </div>
        

    </div>
  )
}

export default Header