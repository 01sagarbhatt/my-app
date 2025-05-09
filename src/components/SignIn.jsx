import React from 'react'

function SignIn() {
  return (
    <>
    
    <div > 
            	<div className="w-[1200px] bg-white rounded-lg shadow-lg flex min-h-[800px]">  <div className="w-[40%] bg-neutral-100 flex flex-col justify-center items-center px-8">
	    <h1 className=" font-title text-4xl mb-2">Join Us</h1>
	    <h2 className="text-purple-700 text-lg mb-6">Shehar Saipathi</h2>
	    <img
	      src="https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	      alt="doodles"
	      className="w-[300px] h-[400px] object-cover"
	    />
	  </div>
	  <div className="w-[60%] px-10 flex flex-col justify-center">
	    <div className="flex justify-between mb-8">
	      <button className="text-primary-700 font-semibold border-b-2 border-primary-700 pb-2">
	        Sign Up
	      </button>
	      
	    </div>
	    <form className="grid grid-cols-2 gap-4 mb-8">
	      <input
	        type="text"
	        placeholder="First name*"
	        className="w-full border border-neutral-300 rounded-md p-3"
	      />
	      <input
	        type="text"
	        placeholder="Last name*"
	        className="w-full border border-neutral-300 rounded-md p-3"
	      />
	      <input
	        type="text"
	        placeholder="Phone number*"
	        className="w-full border border-neutral-300 rounded-md p-3"
	      />
	      <input
	        type="email"
	        placeholder="Email*"
	        className="w-full border border-neutral-300 rounded-md p-3"
	      />
	      <input
	        type="text"
	        placeholder="Destination City"
	        className="w-full border border-neutral-300 rounded-md p-3"
	      />
	      <div className="relative">
	        <input
	          type="password"
	          placeholder="Create password*"
	          className="w-full border border-neutral-300 rounded-md p-3"
	        />
	        <span className="material-symbols-outlined absolute right-3 top-3.5 text-neutral-500">
	          visibility
	        </span>
	      </div>
	    </form>
	    <button className="bg-blue-600 text-white rounded-md text-lg py-3 px-6 w-full">
	      Sign Up
	    </button>
	    <div className="flex items-center my-6">
	      <hr className="border-neutral-300 border-t w-full" />
	      <span className="px-4 text-neutral-500">or </span>
	      <hr className="border-neutral-300 border-t w-full" />
	    </div>
	    <button className="border border-neutral-300 rounded-md py-3 px-6 flex items-center justify-center w-full mb-4">
	      <img
	        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
	        alt="Google Icon"
	        className="h-[20px] w-[20px] mr-3"
	      />
	      Google
	    </button>
	    <p className="text-neutral-500 text-sm text-center">
	      By clicking submit you agree to the <span className="text-primary-700">Terms and Conditions</span>
	    </p>
	  </div>
	</div> 
            </div>
    </>
  )
}

export default SignIn