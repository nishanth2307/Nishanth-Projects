import React,{useState , useEffect} from "react";
import './Sidebar.scss';
import Links from "./Links/Links";
import Toggle from "./Toggle/Toggle";
import {motion} from 'framer-motion'



const Sidebar = () =>{
 
  const [open , setOpen] = useState(false)

  useEffect(() =>{
    console.log(open , 'open')
  },[open])
  const variants = {
     open:{
        clipPath:'circle(1200px at 50px 50px)',
        transition:{
            type:'spring',
            stiffness:20,
        }
     },
     close:{
        clipPath:'circle(20px at 40px 40px)',
        transition:{
            delay:0.3,
            type:'spring',
            stiffness:400,
            damping:40,
        }
     }
  }
 



    return(
        <motion.div className="sidebar" animate={open ? 'open' :'close'}>
            <motion.div className="background" variants={variants}>
                <Links/>
            </motion.div>
            <Toggle setOpen={setOpen}/>
        </motion.div>
    )
}

export default Sidebar