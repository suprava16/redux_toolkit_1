import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginSlice=createSlice({
  name:"login",
  initialState:{
    email:"",
    password:""
  },
  reducers:{
    addEmail(state,action){
       state.email=action.payload
    },
    addPassword(state,action){
       state.password=action.payload
    }
  }
})

export const {addEmail,addPassword}=loginSlice.actions;
export default loginSlice.reducer

export function passData(email,password){
  return async function getDetails(dispatch,getState){
    try{
      const res=await axios.post("https://reqres.in/api/login",{email:email,password:password})
     
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
  }
}
