import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addEmail, addPassword, loginDetails } from "../store/loginSlice"
function Login() {

  const dispatch = useDispatch()

  const myData = useSelector((store) => store.login)

  console.log(myData)

  const handleEmail = (event) => {
    dispatch(addEmail(event.target.value))
  }

  const handlePassword = (event) => {
    dispatch(addPassword(event.target.value))
  }

  const handleClick = () => {
    dispatch(loginDetails(myData.email, myData.password))
  }
  return (
    <div>
      <input
        type="text"
        placeholder='enter email'
        onChange={handleEmail}
      />
      <input
        type="password"
        placeholder='enter password'
        onChange={handlePassword}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login