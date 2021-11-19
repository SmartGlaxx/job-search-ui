import './topbar.css'
import { Grid } from '@material-ui/core'
import {FaSearch, FaHome, FaPeopleArrows, 
    FaRegClock, FaUserFriends, FaBriefcase, FaUserAlt, 
    FaTh, FaBell, FaRocketchat} from 'react-icons/fa' 

const Topbar =()=>{
    return <Grid className='topbarContainer' container>
        <Grid className="topLeft" item xs ={12} sm={3}>
            <span>SC</span>
            <div className='topLeft-inner'>
                <FaSearch />
                <input type='search' className='search' placeholder='Searcg SmartConnect'/>
            </div>
        </Grid>
        <Grid className="topCenter" item xs ={0} sm={5}>
            <div className="topCenter-inner">
                <ul className="topCenter-ul">
                    <li className="topCenter-li">
                    <FaHome className="icons"  size='25'/>
                    </li>
                    <li className="topCenter-li">
                    <FaPeopleArrows className="icons"  size='25'/>
                    </li>
                    <li className="topCenter-li">
                    <FaUserFriends className="icons"  size='25'/>
                    </li>
                    <li className="topCenter-li">
                    <FaBriefcase className="icons"  size='25'/>
                    </li>
                </ul> 
            </div>
        </Grid>
        <Grid className="topCRight" item xs ={0} sm={4}>
            <div className="topRight-inner">
                <ul className="topRight-ul">
                    <li className='topRight-li'>
                        <FaUserAlt className="icons2" />
                    </li>
                    <li className='topRight-li'>
                        <FaTh  className="icons2"/>
                    </li>
                    <li className='topRight-li'>
                        <FaRocketchat  className="icons2"/>
                    </li>
                    <li className='topRight-li'>
                        <FaBell  className="icons2"/>
                    </li>
                </ul>
            </div>
        </Grid>
    </Grid>
}

export default Topbar