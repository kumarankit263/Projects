import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
// import './index.css'
import Form from './Form.jsx'
import Success from './Success.jsx'

const  router=createBrowserRouter([
  {
    path:'/',
    element:<Form/>,
  },
  {
    path:'/success',
    element:<Success/>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


