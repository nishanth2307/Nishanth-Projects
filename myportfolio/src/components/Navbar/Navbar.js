import React from 'react'
import './Navbar.scss'
import facebookIcon from '../../assets/facebook.png'
import linkedInIcon from '../../assets/linkedin.png'
import instagramIcon from '../../assets/instagram.png'
import youtubeIcon from '../../assets/youtube.png'
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'


const Navbar = () =>{
    return(
        <div className='navbar'>
          <Sidebar/>
          <div className='wrapper'>
            <div className='logo-design'>
              <motion.span 
              initial={{opacity:0 , scale:0.5}} 
              animate={{opacity:1 , scale:1}}
              transition={{duration:0.5}}
              style={{fontFamily:'Allura',fontWeight:'400',fontSize:'2em'}}>N Designs</motion.span>
            </div>
            <div className='social'>
                <a href="https://www.facebook.com/nishanth.nishanth.31337194?mibextid=ZbWKwL"><img src={facebookIcon}></img></a>
                <a href="https://www.linkedin.com/in/nishanth-nataraj-3259a0203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedInIcon}></img></a>
                <a href="https://www.instagram.com/single_pirate?igsh=N3Y3OW9ueWo3M2g0"><img src={instagramIcon}></img></a>
                <a href=""><img src={youtubeIcon}></img></a>
            </div>
          </div>
        </div>
    )
}

export default Navbar