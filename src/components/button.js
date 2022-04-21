// import React from 'react'
 
// const Button = () => <button className="bg-blue-400 hover:bg-slate-700 py-2 px-4 rounded font-bold text-white" onClick={press}>Press me</button>
// const press = () => {alert("OMG YOU PRESSED IT")}
// //const Para = () => <p>This is the personal Website of Vijit Chandna, Created using React Js</p>
// export default Button

import React, {Component} from "react"

class Message extends Component {
     constructor(){
          super()
          this.state = {
               message: 'Welcome Visitor'
          }
     }
     changeMessage() {
          this.setState({
             message:  'thank you for subbing'
          })
     }
     render() {
          return (
               <div>
                    <h1> {this.state.message} </h1>
                    <button className="bg-blue-400 hover:bg-slate-700 py-2 px-4 rounded font-bold text-white" onClick={()=> this.changeMessage()  }>subscribe</button>
                    
                    
               </div>
          )
     }
}

export default Message

