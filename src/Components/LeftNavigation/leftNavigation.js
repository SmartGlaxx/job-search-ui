import './left-navigation.css'
import Grid from "react-loading-icons/dist/components/grid"
import { UseAppContext } from "../../Contexts/app-context"
import { Link } from "react-router-dom"
import { FaUserAlt, FaImages, FaExclamationCircle, FaPeopleArrows, FaUserFriends,
    FaBriefcase} from 'react-icons/fa'

const LeftNavigation = ()=>{
    const {loggedIn, loading, setLazyLoading, lazyLoading, currentUser,timelineposts, allUsers, postcreated, 
        setPostCreated, currentUserParsed, fetchedUser} = UseAppContext()
    const {_id : userId, username : userUsername, followings, followers, 
        profilePicture : userProfilePicture, coverPicture : userCoverPicture} = fetchedUser
    const {_id , username, firstname, lastname} = currentUserParsed

    let firstnameCapitalized = '';
    let lastnameCapitalized = ''
    if(firstname){
        firstnameCapitalized = firstname.slice(0,1).toUpperCase().concat(firstname.slice(1).toLowerCase())
    }

    if(lastname){
        lastnameCapitalized = lastname.slice(0,1).toUpperCase().concat(lastname.slice(1).toLowerCase())
    }

    return   <div className='page-left-inner' >
        <div className='homepage-left-top'>
        <Link to={`/userprofile/${_id}/${username}`} className='left-nav'>
            <FaUserAlt /> {`${firstnameCapitalized} ${lastnameCapitalized}`}
        </Link>
        </div>
        <ul className='homepage-left-ul' >
            <li className='homepage-left-li'>
              <Link to={`/connections/${_id}/${username}`}  className="left-nav" >
                <FaPeopleArrows />  Connections
            </Link>
            </li>
            <li className='homepage-left-li'>              
                <Link to={`/follows/${_id}/${username}`} className="left-nav">
                <FaUserFriends />  Follows
                </Link>
            </li>
            <li className='homepage-left-li'>
               <FaBriefcase /> Jobs
            </li>
        </ul>
    </div>
}

export default LeftNavigation