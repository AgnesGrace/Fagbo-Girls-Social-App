import React from "react"
import {Search, Person, Chat, Notifications} from '@material-ui/icons'
import './NavBar.css'



function NavBar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">FagboGirls</span>
            </div>
            <div className="navbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input className="searchInput" placeholder="Search for any Programming language or a post"></input>
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink timeline">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications />
                        <span className="navbarIconBadge">1</span>
                    </div>

                </div>
                <img src="/assets/profile_pix/profile1.png" alt="" className="navbarImg"/>
            </div>


        </div>
    )
}

export default NavBar;