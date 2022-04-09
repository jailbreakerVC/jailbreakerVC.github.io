import React from 'react'
 
const Para = (props) => {
     console.log(props)
return(
     <div>
          <p className="bg-amber-200 text-purple-700 text-m "> 
               This is the personal Website of Vijit Chandna, Created using React JS, I am {props.age} years old
          </p>
     </div>
     )
}
export default Para