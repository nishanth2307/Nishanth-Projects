import React from 'react'
import {motion} from 'framer-motion'


const Links = () =>{
    const links = ["Home" , "Skills" , "About" , "Contact"]
    const variants = {
        open:{
            transition:{
                staggerChildren:0.1
            }
        },
        close:{
            transition:{
                staggerChildren:0.05,
                staggerDirection:-1
            }
        }
    }
    
    const itemVariants = {
        open:{
           y:0,
           opacity:1
        },
        close:{
           y:50,
           opacity:0
        }
    }



    return (
        <motion.div className='links' variants={variants}>{
            links.map((link) => {
                return(
                    <motion.a href={`#${link}`} key={link} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{link}</motion.a>
                )
            })
        }</motion.div>
    )
}

export default Links