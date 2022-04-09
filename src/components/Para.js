import React from 'react'
 
const Para = (props) => {
     console.log(props)
return(
     <div>
          <p className="bg-yellow-200 text-black text-m font-normal"> 
               This is the personal Website of <a className='text-purple-700'>Vijit Chandna</a>, Created using React JS, I am {props.age} years old
          </p>
     </div>
     )
}
export default Para