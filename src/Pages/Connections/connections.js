import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './connections.css'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import { FaUserAlt, FaUsers, FaImages, FaExclamationCircle, FaHome, FaUser } from 'react-icons/fa'
import { Dummy } from '../dummy'
import {Topbar, Sidebar, Backdrop, Posts} from '../../Components';
import { UseAppContext } from '../../Contexts/app-context'
import {Link, useNavigate} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import OtherUsers from '../../Components/OtherUsers/otherUsers'
import LoadingIcons from 'react-loading-icons'
import ProfileImage from '../../assets/profile.jfif'
import CoverImage from '../../assets/cover.jfif'
import Button from '@restart/ui/esm/Button'
import Profile from "../../assets/profile.jfif"

const Connections =()=>{
const {loggedIn, setLoading, loading, currentUser, currentUserParsed, allUsers, postcreated, setPostCreated,
tempAllUsers, setNewCurrentUser, setUserClicked, userClicked, setFetchedUser, fetchedUser, setTestValue, testValue} = UseAppContext()
const [formValue, setFormValue] = useState('')
const [error, setError] = useState({status : false, msg:''})
const {_id : userId, username : userUsername, followings, followers, connections, connectionRequests} = JSON.parse(currentUser)
const [alertMsg, setAlertMsg] = useState({status : false, msg : ''})
const unFollowurl = 'https://smart-job-search.herokuapp.com/api/v1/user/unfollow'
const getUserurl = `https://smart-job-search.herokuapp.com/api/v1/user/${userId}/${userUsername}`
const posturl = 'https://smart-job-search.herokuapp.com/api/v1/posts'
// const [userClicked, setUserClicked] = useState(false)
const [newPage, setNewPage] = useState(false)
const [timelineposts, setTimelinePosts] = useState([])

// const setValues = (e)=>{
//     setFormValue(e.target.value)
// }


const setValues = (value, data)=>{
    setNewCurrentUser(data)
    setLoading(value)
}

const {id, username} = useParams()
console.log('response kl', currentUserParsed)
const acceptRequest = async(value1, value2)=>{
    const {_id : currentUserId, username : currentUserName} = JSON.parse(currentUser)
    const options ={
        url : `https://smart-job-search.herokuapp.com/api/v1/user/acceptconnectrequest/${value1}/${value2}`,
        method : "PATCH",
        headers : {
           "Accept" : "Application/json",
           "Content-Type" : "Application/json;charset=utf-8"
        },
        data :{
            userId : currentUserId,
            username : currentUserName
        }
    }
    
    const result = await axios(options)
    const {response} = result.data
    if(response == 'Success'){
        const reponse_2 = await axios(getUserurl)
        const {data} = reponse_2.data
        
        if(data){
            // window.location.href='/' 
            // setValues(true, data)
            setTestValue(!testValue)
        } 
    }else{
        setError({status : true, msg : "Failed to post comment"})
    }
}


let userConnectionRequests = []
let userConnections = []

    userConnectionRequests =  allUsers.filter(user =>{
        return currentUserParsed.connectionRequests == user._id
        })
    userConnections =  allUsers.filter(user =>{
        return currentUserParsed.connections == user._id
        })        


 console.log('allUsers now', userConnections)
    return <div className=''>
        <h3>Connections</h3>
        
        {username}
        <div>Connection Requests {userConnectionRequests.length}</div>
        {

            userConnectionRequests.map(user =>{
                const {_id, username, followers, followings, connections} = user
                return <><div>{username}</div><Button onClick={()=>acceptRequest(_id,username)}>Accept</Button>
                <Button>Decline</Button></>
            })
        }
        <div>Connections {userConnections.length}</div>
        {

            userConnections.map(user =>{
                const {_id, username, followers, followings, connections} = user
                return <div>{username}</div>
            })
        }
        </div>
}

export default Connections