import React,{useRef} from 'react'
import {motion,useScroll ,useTransform} from 'framer-motion'
import './Parallelex.scss'
import sunImage from '../../assets/sun.png'
import planetImage from '../../assets/planets.png'


const Parallalex = ({type}) =>{
   const scrollRef = useRef()
   const {scrollYProgress} = useScroll({
     target:scrollRef,
     offset:["start start" , "end start"]
   })
   const yText = useTransform(scrollYProgress,[0,1],["0%" , "100%"])
   const yStars = useTransform(scrollYProgress,[0,1],["0%" , "10%"])
   const yPlanets = useTransform(scrollYProgress,[0,1],["0%" , "5%"])

    return (
        <div className='parallelex' ref={scrollRef} style={{background: type === "skills" ? 
        "linear-gradient(180deg , #111132 , #0c0c1d)" : 
        "linear-gradient(180deg , #111132 , #505064)"}}>
            <motion.h1 style={{y:yText}}>{type === "skills" ? "My Skills" :"About Me"}</motion.h1>
            <motion.div className='mountains'></motion.div>
            <motion.div style={{y:yPlanets , backgroundImage:`url(${type === "skills" ? planetImage : sunImage})`}} className='planets'></motion.div>
            <motion.div style={{x:yStars}} className='stars'></motion.div>
        </div>
    )
}

export default Parallalex