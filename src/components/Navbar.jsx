import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  
  const navigate = useNavigate();
        
  
  return (
    
        <>
        

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
      
    <Link to="/"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">Sehar-Sehpathi</span></Link>  
    
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <button onClick={()=>navigate("/login")} type="button" class="text-white mr-4 bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800">Log in</button>
      <button onClick={()=>navigate("/signin")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/"  className={({isActive})=>`block py-2 px-3 ${isActive ?"text-blue-700":"text-gray-900"}  rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700` }>Home </NavLink>
      </li>
      <li>
       <NavLink to="/aboutUs" className={({isActive})=>`block py-2 px-3 ${isActive ?"text-blue-700":"text-gray-900"}  rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700` }>About</NavLink> 
      </li>
      <li>
       <NavLink to="/services" className={({isActive})=>`block py-2 px-3 ${isActive ?"text-blue-700":"text-gray-900"}  rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Explore Now</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs"  className={({isActive})=>`block py-2 px-3 ${isActive ?"text-blue-700":"text-gray-900"}  rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700` }>Contact </NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>


        </>
   
  )
}

export default Navbar