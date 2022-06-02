import React from 'react'
import Login from './component/Login'
import Store from "./store/store"
import { Provider } from "react-redux"
function App() {
  return (
    <div>
      <Provider store={Store}>
        <Login />
      </Provider>

    </div>
  )
}

export default App