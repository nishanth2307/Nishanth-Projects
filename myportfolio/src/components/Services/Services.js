import React from 'react'
import {motion} from 'framer-motion'
import './Services.scss'
import PeopleImage from '../../assets/people.png'
import figmaImage from '../../assets/figma.svg'
import bootStrapImage from '../../assets/bootstrap.svg'
import sassImage from '../../assets/sass.svg'
import ReactImage from '../../assets/react.svg'
import FramerImage from '../../assets/framer.svg'

const Services = () =>{
  
  
  const variants = {
    initial:{
      x: window.matchMedia("(max-width: 320px)").matches ? 0 : -500,
      y:100,
      opacity:0
    },
    animate:{
       x:0,
       y:0,
       opacity:1,
       transition:{
         duration:1,
         staggerChildren: 0.1,
       }
    }
  }
    return (
        <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
            <motion.div className='textContainer' variants={variants}>
               <p>I focus on helping your brand grow<br/>
                and move forward
               </p>
               <hr/>
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
               <div className='title'>
                 <img  src={PeopleImage}></img>
                 <h1><motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas</h1>
               </div>
               <div className='title'>
                 <h1><motion.b whileHover={{color:'orange'}}>For Your </motion.b> Business.</h1>
                 {/* <button>?</button> */}
               </div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
               <motion.div className='box' whileHover={{background:"lightgray" , color:'black',scale:1.1 ,border:'none'}}>
                  <h3>Designing</h3>
                    <div className='box-image'>
                      <img src={figmaImage}></img>
                    </div>
                      <p>
                        I use figma tool for designing and to create visually appealing and user-friendly interfaces for websites, web applications, mobile apps, and other digital products.
                      </p>
               </motion.div>
               <motion.div className='box' whileHover={{background:"lightgray" , color:'black' ,scale:1.1 ,border:'none'}}>
                  <h3>Responsiveness Styling</h3>
                   <div className='box-image'>
                      <img src={bootStrapImage}></img>
                      <img src={sassImage}></img>
                   </div>
                   <p>
                     I use bootstrap for responsiveness and sass for Styling for building responsive and user-friendly websites, Sass enhances the capabilities of CSS by providing nesting, and mixins to make stylesheets more maintainable and efficient.
                   </p>
               </motion.div>
               <motion.div className='box' whileHover={{background:"lightgray" , color:'black' , scale:1.1 ,border:'none'}}>
                  <h3>Development</h3>
                  <div className='box-image'>
                     <img src={ReactImage}></img>
                  </div>
                  <p>
                     I use javascript and React for building user interfaces using a declarative approach, making it easier
                  </p>
               </motion.div>
               <motion.div className='box' whileHover={{background:"lightgray" , color:'black' , scale:1.1 ,border:'none'}}>
                  <h3>Animation</h3>
                  <div className='box-image'>
                     <img src={FramerImage} style={{color:'white'}}></img>
                  </div>
                  <p>I use Framer Motion for animations a simple and intuitive API for creating a variety of animations, including transitions, keyframes, and more.</p>
               </motion.div>
            </motion.div>
        </motion.div>
       
    )
}

export default Services