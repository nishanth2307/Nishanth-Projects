import React from 'react'
import {motion} from 'framer-motion'


const Toggle = ({setOpen}) =>{
    return(
       <button style={{cursor:'pointer'}} onClick={() => setOpen(prev => !prev)}>
         <svg style={{cursor:'pointer'}} width="23" heigth="23" viewBox='0 0 23 23'>
            <motion.path style={{cursor:'pointer'}} strokeWidth="3" stroke='black' strokeLinecap='round' 
            variants={{close:{d: "M 2 2.5 L 20 2.5"}, open:{d:"M 3 16.5 L 17 2.5"}}}></motion.path>
            <motion.path style={{cursor:'pointer'}} strokeWidth="3" stroke='black' strokeLinecap='round'
              d="M 2 9.423 L 20 9.423"
              variants={{
                close:{opacity: 1},
                open:{ opacity: 0}
              }}
            ></motion.path>
            <motion.path style={{cursor:'pointer'}} strokeWidth="3" stroke='black' strokeLinecap='round'
             variants={{close:{d: "M 2 16.346 L 20 16.346"}, open:{d:"M 3 2.5 L 17 16.346"}}}
            ></motion.path>
         </svg>
       </button>
    )
}

export default Toggle