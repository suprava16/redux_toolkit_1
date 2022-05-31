import React from 'react'
import Login from './Components/Login'
import {Provider} from "react-redux"
import Store from "./store/store"
function App() {
  return (
    <div>
    <Provider store={Store}>
      <Login/>
      </Provider>
    </div>
  )
}

export default App