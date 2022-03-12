import React from 'react'
import './online.css'
import {Users} from '../../TemporaryData.js'

export default function Online({user}) {
  return (
    <>
        <li className="rightbarFriend">
            <div className="rightImgContainer">
                <img src={user.profilePicture} alt="person" className='rightbarImg' />
                <span className='rightbarOnline'></span>
            </div>
             <span className='rightbarUserName'>{user.username}</span>
        </li>
        

    </>
    
    
  )
}
