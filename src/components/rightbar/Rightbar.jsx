import React from 'react'
import './Rightbar.css'
import {Users} from '../../TemporaryData.js'
import Online from '../online/Online.jsx'

function Rightbar() {
    return(
        <div className='rightbar'>
            <div className="rightbarContainer">
                <div className="rightbarWrapper">
                    <div className="birthdayContainer">
                        <img src="assets/post/birthday.png" alt="" className='birthdayImg'/>
                        <span className='birthdayText'>Celebrate <b>Rosemary</b> and <b>others</b> as they celebrate their day today</span>
                    </div>
                    <img src="assets/advert.png" alt="Advert" className='rightbarAdvert'/>
                    <h4 className='rightbarTitle'>Online Students</h4>
                    <ul className="rightbarFriendList">
                       {Users.map (u => 
                           <Online key={u.id} user = {u} />
                       )}
                    </ul>
                </div>
            </div>
            

        </div>
    )
}


export default Rightbar;