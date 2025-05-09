import React from 'react'


function Login() {
  return (
    <>
    <div > 
            	<div className="w-[1000px] min-h-[700px] bg-neutral-100 flex justify-center items-center mx-auto rounded-lg shadow-lg">
	  <div className="flex gap-10">
	    <div className="flex justify-center items-center rounded-lg shadow-lg">
	      <img
	        src="https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	        alt="Illustration"
	        className="w-[350px] h-[600px] object-cover"
	      />
	    </div>
	    <div className="basis-1/2 bg-white p-8 rounded-lg shadow-md">
	      <div className="flex justify-between items-center mb-6">
	        <h1 className="text-2xl font-title font-bold text-neutral-950 ">
	          Welcome to <span className="text-purple-700"> Sehar Sehpathi</span>
	        </h1>
	        <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
    {/* <span aria-hidden="true" >&times;</span> */}
  </button>
	      </div>
	      <button className="w-full h-[50px] flex items-center justify-center gap-2 bg-neutral-100 rounded-md text-neutral-700 font-medium mb-4 shadow">
		  <img
	        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
	        alt="Google Icon"
	        className="h-[20px] w-[20px] mr-3"
	      /> Login with Google
	      </button>
	      <div className="flex items-center justify-center my-4">
	        <hr className="flex-grow border-neutral-300" />
	        <span className="px-4 text-neutral-500">OR</span>
	        <hr className="flex-grow border-neutral-300" />
	      </div>
	      <form>
	        <div className="mb-4">
	          <label htmlFor="email" className="text-neutral-700 font-medium block mb-1">
	            Email
	          </label>
	          <div className="flex items-center text-neutral-500 rounded-md h-[50px] px-4 shadow">
	            <i className="fa-solid fa-envelope text-neutral-500"></i>
	            <input
	              type="email"
	              id="email"
	              placeholder="example@gmail.com"
	              className="flex-grow bg-transparent ml-2 text-neutral-700"
                  
	            />
	          </div>
	        </div>
	        <div className="mb-4">
	          <label htmlFor="password" className="text-neutral-700 font-medium block mb-1">
	            Password
	          </label>
	          <div className="flex items-center text-neutral-500 rounded-md h-[50px] px-4 shadow">
	            <i className="fa-solid fa-lock text-neutral-500"></i>
	            <input
	              type="password"
	              id="password"
	              placeholder="********"
	              className="flex-grow bg-transparent outline-none ml-2 text-neutral-700"
	            />
	            <span className="material-symbols-outlined text-neutral-500">visibility</span>
	          </div>
	        </div>
	        <div className="flex justify-between items-center mb-6">
	          <div className="flex items-center">
	            <input
	              type="checkbox"
	              id="remember-me"
	              className="w-[20px] h-[20px] rounded-md accent-primary-500"
	            />
	            <label htmlFor="remember-me" className="ml-2 text-neutral-700">
	              Remember me
	            </label>
	          </div>
	          <a href="#" className="text-primary-500 text-sm">
	            Forgot Password?
	          </a>
	        </div>
	        <button className="w-full h-[50px] bg-purple-700 text-white rounded-md shadow-md font-medium mb-4">
	          Login
	        </button>
	      </form>
	      <p className="text-center text-neutral-500">
	        Don't have an account?{" "}
	        <a href="#" className="text-primary-500 font-medium">
	          Register
	        </a>
	      </p>
	    </div>
	  </div>
	</div> 
            </div>
			<br></br>
    
    </>
  )
}

export default Login