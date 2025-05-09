import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'

// import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Login from './components/Login.jsx'
import SignIn from './components/SignIn.jsx'
import Services from './components/Services.jsx'
import RoomShowing from './components/Rooms/RoomShowing.jsx'
import CollegeShowing from './components/Colleges/CollegeShowing.jsx'
import JobsShowing from './components/JobComponent/JobsShowing.jsx'

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '',
                element: <Home/>
            },

        {
                    path: 'aboutUS',
                    element: <AboutUs/>
        }   ,  
        {
            path: 'contactUs',
            element: <ContactUs/>

        },{
            path: 'login',
            element: <Login/>
        },
        {
            path: 'signin',
            element: <SignIn/>
        },
        {
            path: 'services',
            element: <Services/>
        },
        {
            path: 'universities',
            element: <CollegeShowing/>
        },
        {
            path: 'roomShowing',
            element: <RoomShowing/>
        },
        {
            path: 'jobShowing',
            element: <JobsShowing/>
        }
       ]
    }

])


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>    
)




// createRoot(document.getElementById('root')).render(

//     <App />

// )
