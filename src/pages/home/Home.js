import React from "react"
import './Home.css'
import NavBar from '../../components/navBar/NavBar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'



function Home() {
    return (
        <>
            <NavBar />
            <div className="myHomeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
            
        </>
        
    )
}



export default Home;