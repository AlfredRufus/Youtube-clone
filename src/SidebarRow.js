import React from 'react'

import "./SidebarRow.css";
function SidebarRow({ Icon,title}) {
  return (
    <div className='SidebarRow'>
        <Icon className="SidebarRow__icon"/>
        <h2 className='SidebarRow__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow