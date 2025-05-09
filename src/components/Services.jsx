import React from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'

function Services() {
  return (
   <>
  <div > 
            	<div className="w-[1200px] rounded-lg bg-white p-6 shadow-lg mx-auto mt-20">
	  <h2 className="font-title text-lg font-bold text-neutral-950 mb-6">Services</h2>
	  <ul className="space-y-6">
	    <Link to='/universities' className="flex items-center justify-between rounded-md hover:bg-slate-300 cursor-pointer">
	      <div className="flex items-center gap-4">
	        <img
	          src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	          alt="CalCentral"
	          className="h-[60px] w-[60px] rounded-md object-cover"
	        />
	        <div>
	          <h3 className="text-neutral-950 font-medium">Universities</h3>
	          <p className="text-neutral-500 text-sm">
               We have According to current rankings, the top universities in this area.
	          </p>
	        </div>
	      </div>
	      <span className="material-symbols-outlined text-neutral-500"></span>
	    </Link>
	    <Link to='/roomShowing' className="flex items-center justify-between hover:bg-slate-300 rounded-md cursor-pointer ">
	      <div className="flex items-center gap-4">
	        <img
	          src="https://plus.unsplash.com/premium_vector-1682308732216-f77739f22abc?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	          alt="Tele-BEARS"
	          className="h-[60px] w-[60px] rounded-md object-cover"
	        />
	        <div>
	          <h3 className="text-neutral-950 font-medium">Houses</h3>
	          <p className="text-neutral-500 text-sm">
              The "best" houses generally provide a combination of comfort, safety.
	          </p>
	        </div>
	      </div>
	      <span className="cursor-cell"></span>
	    </Link>
	    <Link to='/jobShowing' className="flex items-center justify-between hover:bg-slate-300 rounded-md cursor-pointer ">
	      <div className="flex items-center gap-4 ">
	        <img
	          src="https://plus.unsplash.com/premium_photo-1674338457396-5d6db9f30f52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	          alt="Student Services"
	          className="h-[60px] w-[60px] rounded-md object-cover"
	        />
	        <div  >
	          <h3 className="text-neutral-950 font-medium">Jobs</h3>
	          <p className="text-neutral-500 text-sm  ">
	            We provide a Jobs in this area
	          </p>
	        </div>
	      </div>
	      <span className="material-symbols-outlined text-neutral-500"></span>
	    </Link>
	    <li className="flex items-center justify-between">
	     
	      
	    </li>
	  </ul>
	</div> 
            </div>
   
   
   </>
  )
}

export default Services