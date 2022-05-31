import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {addEmail,addPassword,passData} from "../store/loginSlice"
function Login() {
  const dispatch=useDispatch()
  const data=useSelector((state)=> state.login)
  console.log(data)
  const handleEmail=(event)=>{
    dispatch(addEmail(event.target.value))
  }

  const handlePassword=(event)=>{
    dispatch(addPassword(event.target.value))
  }
  const handleClick=()=>{
    dispatch(passData(data.email,data.password))
  }
  return (
    <div>
      <input type="text" onChange={handleEmail}/>
      <input type="password" onChange={handlePassword}/>
     <button onClick={handleClick}>LOGIN</button> 
    </div>
  )
}

export default Login