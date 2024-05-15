import React from "react";
import './Profile.scss'
import coverImage from '../../assets/cover.png'
import scrollImage from '../../assets/scroll.png'
import portfolioImage from '../../assets/portfolioImage.png'
import {motion} from 'framer-motion'


const Profile = () =>{

    const textVariants = {
       initial:{
        x:-500,
        opacity:0,
       },
       animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1
        }
       },
       scroll:{
         opacity:0,
         y:10,
         transition:{
            duration:2,
            repeat:Infinity
         }
       }

    }

    const slideVariants = {
        initial:{
         x:0,
        },
        animate:{
         x:"-100%",
         transition:{
            repeat:Infinity,
            repeatType:"mirror",
             duration:20,
         }
        }
     }
 


    return(
        <div className="profile">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>NISHANTH N</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <button variants={textVariants}><a href="#About">About Me</a></button>
                    <button variants={textVariants} ><a href="#Contact">Contact Me</a></button>
                </motion.div>
                </motion.div> 
                <div className="imageContainer">
                   <div className="shape">
                     <img src={portfolioImage}></img>
                   </div>
                </div>
                {/* <motion.img variants={textVariants} src={scrollImage} animate="scroll"></motion.img> */}
            </div>
            <motion.div variants={slideVariants} initial="initial" animate="animate" className="slidingText">React developer</motion.div>
            {/* <div className="image-container">
               <img src={coverImage}></img>
            </div> */}

        </div>
    )
}


export default Profile