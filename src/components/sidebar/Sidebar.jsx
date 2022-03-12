import React from 'react'
import './Sidebar.css'
import {Group, Event, School, RssFeed, Help, Chat,LibraryAdd} from '@material-ui/icons'
import {Users} from '../../TemporaryData.js'
import GroupFriends from '../groupFriends/GroupFriends.jsx'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidewrapper">
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon'/>
                        <span className="sidebarListItemText">Learning Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className='sidebarIcon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon'/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <LibraryAdd className='sidebarIcon'/>
                        <span className="sidebarListItemText">Library</span>
                    </li>

                </ul>
                <button className="sidebarButton">More...</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                   {Users.map(u =>
                        <GroupFriends key = {u.id} friends = {u} />
                     )}


                </ul>
            </div>
            
        </div>
    )
}


export default Sidebar;