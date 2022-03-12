import React from 'react'
import './Feed.css'
import Share from '../share/Share.jsx'
import Post from '../post/Post.jsx'
import {Posts} from '../../TemporaryData.js'




function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key = {post.id} postContent = {post}/>
        ))}


      </div>
        
    </div>
  )
}


export default Feed;