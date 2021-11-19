import './homepage.css'
import { Grid } from '@material-ui/core'
import { FaUserAlt, FaImages } from 'react-icons/fa'
import { Dummy } from '../dummy'
import Posts from '../../Components/Posts/posts'

const HomePage =()=>{

    return <Grid className='homepage' container > 
        <Grid className='homepage-left' item xs={0} sm={3} >
            <div className='homepage-left-inner' >
                <div className='homepage-left-top'><FaUserAlt /> Smart Egbuchulem</div>
                <ul className='homepage-left-ul'>
                    <li className='homepage-left-li'>
                        Find Connections
                    </li>
                    <li className='homepage-left-li'>
                        My Connections
                    </li>
                    <li className='homepage-left-li'>
                        Jobs
                    </li>
                </ul>
            </div>
        </Grid>
        <Grid className='homepage-center'item xs={12} sm={6} >
            <div className='homepage-center-top'>
                <div className='homepage-center-top-inner'>
                    <FaUserAlt className='icon' size='30'/>
                    <input type='text' name='post-input' placeholder='Make a post' className='homepage-center-input'/>
                    {/* <button className='post-btn'>Post</button> */}
                </div>     
                <hr className='homepage-center-top-hr'/>
                <div className='homepage-center-top-inner2'>
                    <label htmlFor='picture' >
                        <div className="homepage-center-input-item">
                            <FaImages className='homepage-center-input-icon' size='30'/> Picture
                       </div>
                     <input id='picture' type='file' className='homepage-center-input2'/>
                    </label>
                    <button className='post-btn'>Post</button>
                </div>     
            </div>    
            <div className='homepage-center-middle'>
              {
                  Dummy.map(item =>{
                      const {id} = item
                      return <Posts key={id} {...item}/>
                  })
              }  
            </div>
        </Grid>
        <Grid className='homepage-right' item xs={0} sm={3} >
            three
        </Grid>
    
    </Grid>
}

export default HomePage
