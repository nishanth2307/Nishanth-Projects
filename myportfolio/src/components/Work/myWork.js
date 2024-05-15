import React,{useEffect, useRef , useState} from 'react'
import {motion , useScroll , useSpring , useTransform ,animate} from 'framer-motion'
import autoInn from '../../assets/nandhiyamaha.jpeg'
import adda from '../../assets/adda.png'
import perromart from '../../assets/perromart.jpg'
import forever from '../../assets/forever21.png'
import school from '../../assets/school.jpg'
import college from '../../assets/skcet.jpg'
import snapdpl from '../../assets/snapdpl.png'
import './myWork.scss'


const MyWork = () =>{
                const items = [
                    {
                        id:1,
                        designation:'School/Under-Graduation',
                        details:[
                            {
                                id:1,
                                image:school,
                                company:'Carmel Garden MHSS',
                                name:'Higher Secondary',
                                description:'Studied higher secondary in the stream of computer science and completed in 2017',
                            },
                            {
                                id:2,
                                image:college,
                                company:'Sri Krishna College of Engineering & Technology',
                                name:'Under Graduation',
                                description:'Studied Bachelor of Technology in the stream of information technology completed in 2021'
                             }
                        ],
                },
                {
                    id:2,
                    designation:'Projects Worked',
                    details:[
                        {
                            id:1,
                            image:autoInn,
                            company:'Codingmart Technologies',
                            name:'AutoInn',
                            description:'An online bike service web application developed using React js ,Context Api ,Redux.',
                        },
                        {
                            id:2,
                            image:adda,
                            company:'Codingmart Technologies',
                            name:'Adda Rummy',
                            description:'An online game web application developed using React js, Redux.'
                        },
                        {
                            id:3,
                            image:perromart,
                            company:'Codingmart Technologies',
                            name:'Perromart',
                            description:'An online Ecommerce website for pets developed using React js, Redux.'
                        },
                        {
                            id:4,
                            image:forever,
                            company:'Codingmart Technologies',
                            name:'Forever 21',
                            description:'An online Ecommerce website for womens, mens, kids,clothings developed using React js, Redux.'
                        },
                        {
                            id:5,
                            image:snapdpl,
                            company:'Codingmart Technologies',
                            name:'SnapDpl',
                            description:'A no coding platform for creating customisable applications developed using React js, Redux.'
                        },
                        
                    ],
                },
                
            ]
    
    
    const [flip , setFlip] = useState(null)
    const [active , setActive] = useState({})

    const variants = {
        initial:{
          y:500,
          opacity:0
        },
        animate:{
          y:0,
          opacity:1,
          transition:{
            duration:0.5,
            staggerChildren: 0.1,
          }
        }
      }

    const handleCardClick = (val) =>{
         setActive(val)
    }


    const Profile = ({item , key}) =>{
        const {scrollYProgress} = useScroll()
        const scaleX = useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
            offset:["end end" , "start start"]
          });
        return(
            <section>
               <div className='headingContainer'>
                  <h2>{item.designation}</h2>
                  <motion.div style={{scaleX:scaleX}} className='progressBar'></motion.div>
               </div>
                <motion.div 
                    className='flipCardContainer' 
                    variants={variants} 
                    initial="initial" 
                    whileInView="animate"
                >
                {
                   item.details.map((val , i) => {
                     return(
                        <motion.div class="flip-card">
                        <motion.div class="flip-card-inner">
                          <motion.div class="flip-card-front">
                            <img src={val.image}></img>
                          </motion.div>
                          <motion.div class="flip-card-back">
                             <motion.h3 initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                >{item.designation === "School/Under-Graduation" ? val.company : val.name}
                            </motion.h3>
                             <motion.span>{val.description}</motion.span>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      
                     )
                   })
                }
                </motion.div>
                
            </section>
        )
    }


   



    return(
        // <div className='portfolio' ref={ref}>
        //     <div className='progress'>
        //        <h1>About</h1>
        //        <motion.div style={{scaleX:scaleX}} className='progressBar'></motion.div>
        //     </div>
        //     {
        //         items.map((item) => {
        //             return  <Single item={item} key={item.id} />
        //         })
        //     }
             
        // </div>
        <div className='About'>
            {
                items.map((item) => {
                    return <Profile item={item} key={item.id}/>
                })
            }
        </div>
       
    )
}

export default MyWork