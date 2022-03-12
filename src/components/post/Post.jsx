import React from 'react'
import './Post.css'
import {MoreVert} from '@material-ui/icons'
import {Users} from '../../TemporaryData.js'

function Post({postContent}) {
    const [like, setLike] = React.useState(postContent.like)
    const [isliked, setIsLiked] = React.useState(false)
    const likeMe = ()=>{
        setLike(isliked? like-1:like +1)
        setIsLiked(!isliked)
    }
  return (
    <div className='postContainer'>
        <div className="postWrapper">
            <div className="postFirst">
                <div className="firstLeft">
                    <img 
                        src={Users.filter(us=>us.id === postContent.userId)[0].profilePicture}
                        alt="person" className='postProfileImg' 
                    />
                    <span className='postUsername'>
                        {Users.filter(us=>us.id === postContent.userId)[0].username}
                    </span>
                    <span className='postDate'>{postContent.date}</span>
                </div>
                <div className="firstRight">
                    <MoreVert />

                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>{postContent.desc}</span>
                <img src={postContent.photo} alt="" className='postImg'/>
            </div>
            <div className="postLast">
                <div className="postLastLeft">
                    <img src="assets/like2.png" alt="like" className='likeIcon'  onClick = {likeMe} />
                    <img src="assets/love.png" alt="like"  className='likeIcon' onClick = {likeMe}/>
                    <span className='postLikeCounter'>{like} likes</span>      
                </div>
                <div className="postLastRight">
                    <span className="postCommentText">{postContent.coment} comments</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Post;
