import React from 'react'
import './Share.css'
import {PermMedia, Room, EmojiEmotions, Label} from '@material-ui/icons'


function Share() {
  return (
    <div className='shareContainer'>
        <div className="shareWrapper">
            <div className="shareFisrt">
               <img src="/assets/profile_pix/profile1.png" alt="person" className='shareImg'/>
                <input placeholder='what do you want to learn today?' className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareLast">
                <div className="shareOptionsContainer">
                    <div className="shareOption">
                        <PermMedia htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>note or Video</span>
                    </div>
                    <div className="shareOption">
                        <Room className='shareIcon' htmlColor='red'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareIcon' htmlColor='black'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>

    </div>
  )
}
export default Share;