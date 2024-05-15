import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import './Cursor.scss'

const Cursor = () => {
 const [position , setPosition] = useState({x:0,y:0})

    useEffect(() => {
    
    const mousePosition = (e) =>{
        setPosition({x:e.clientX , y:e.clientY})
    }

        window.addEventListener("mousemove" , mousePosition)

        return () =>{
            window.removeEventListener("mousemove" , mousePosition)
        }

    },[])


    return(
        <motion.div className='cursor' animate={{x:position.x , y:position.y}}></motion.div>
    )
}

export default Cursor