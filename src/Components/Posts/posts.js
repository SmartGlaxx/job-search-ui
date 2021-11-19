import './posts.css'
import { Grid } from '@material-ui/core'
import Profile from "../../assets/profile.jfif"
import TimeAgo from 'timeago-react'
import { useState } from 'react'
import { FaThumbsUp } from 'react-icons/fa'


const Posts =({id, username, description, likes, createdAt})=>{
    const [readMoreValue, setReadMoreValue] = useState(false)
    const [liked, setLiked] = useState(false)


    //fetch userId and userName using context

    const likesCount = likes.length
    return <div className='posts' container > 
                <div  className='postContainer' >
                <div className='post-top'>
                    <img src={Profile} alt={username}  className='profile-pic'/>
                    <div className='name'>{username}</div>
                    <TimeAgo datetime={createdAt} locale='en_US'/>
                </div>
                <div className='description'>{description.length > 150  && readMoreValue ? description : description.slice(0, 150) + "...  " }
                    <button className='more-btn' onClick={()=>setReadMoreValue(!readMoreValue)}>{readMoreValue ? `Show Less` : `Show More`}</button>
                </div>
                <div><FaThumbsUp className={liked ? `icon-thumbsup-liked` : `icon-thumbsup`} onClick={()=>setLiked(!liked)}/>{likesCount}</div>
            </div>
    </div>
}

export default Posts
