import React from 'react'
import './GroupFriends.css'
import {Users} from '../../TemporaryData.js'

 function GroupFriends({friends}) {
  return (
    <>
         <li className="sidebarFriendItem">
            <img src={friends.profilePicture} alt="Friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{friends.username}</span>
         </li>

    </>
  )
}
export default GroupFriends;