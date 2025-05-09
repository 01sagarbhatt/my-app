import React from 'react'

function JobsShowing() {
  return (
    <>
    
    <div > 
            	<div className="w-[1200px] bg-white rounded-lg shadow-lg px-6 py-4 flex flex-col mx-auto">
	  <header className="flex justify-between items-center mb-6">
	    <h1 className="text-primary-700 font-title text-2xl">Find Job</h1>
	    <nav className="text-neutral-500 text-sm">
	      <a href="#" className="hover:text-primary-700">Home</a> / <span>Find Job</span>
	    </nav>
	  </header>
	  <div className="w-full bg-neutral-100 flex items-center px-6 py-4 mb-6 rounded-md">
	    <div className="flex gap-4 w-full items-center">
	      <div className="flex-1 flex items-center bg-white px-4 py-2 rounded-md">
	        <span className="material-symbols-outlined text-neutral-500">search</span>
	        <input
	          type="text"
	          placeholder="Search by: Job title, Position, Keywords..."
	          className="w-full border-none outline-none text-neutral-700 pl-2"
	        />
	      </div>
	      {/* <div className="flex-1 flex items-center bg-white px-4 py-2 rounded-md">
	        <span className="material-symbols-outlined text-neutral-500">place</span>
	        <input
	          type="text"
	          placeholder="City, state or zip code"
	          className="w-full border-none outline-none text-neutral-700 pl-2"
	        />
	      </div> */}
	      {/* <button className="flex items-center justify-center bg-white border border-neutral-200 px-4 py-2 rounded-md">
	        <span className="material-symbols-outlined text-neutral-700">filter_alt</span>
	        <span className="ml-2 text-neutral-700 text-sm">Filters</span>
	      </button> */}
	      <button className="bg-primary-700 text-white px-6 py-2 rounded-md">
	        Find Job
	      </button>
	    </div>
	  </div>
	  <div className="grid grid-cols-3 gap-6">
	    {["Technical Support Specialist", "Senior UX Designer", "Marketing Officer"].map(
	      (job, index) => (
	        <div key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col">
	          <div className="flex justify-between items-center mb-4">
	            <span className="text-sm text-green-600 font-semibold">
	              {index === 0 ? "PART-TIME" : index === 1 ? "FULL-TIME" : "INTERNSHIP"}
	            </span>
	            <span className="text-neutral-500 text-sm">Salary: $20,000 - $25,000</span>
	          </div>
	          <h2 className="text-primary-700 font-semibold text-lg mb-2">{job}</h2>
	          <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
	            <img
	              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
	              alt="Google"
	              className="h-[20px] w-[20px] object-contain"
	            />
	            <span>Google Inc.</span>
	            <span className="flex items-center">
	              <span className="material-symbols-outlined text-neutral-500 text-sm">place</span>
	              <span className="ml-1">Dhaka, Bangladesh</span>
	            </span>
	          </div>
	          <button className="mt-auto border border-neutral-300 text-neutral-500 flex items-center justify-center px-4 py-2 rounded-md">
	            <span className="material-symbols-outlined">bookmark_border</span>
	          </button>
	        </div>
	      )
	    )}
	  </div>
	  <div className="flex mt-6 justify-center items-center gap-4">
	    <button className="rounded-full h-[30px] w-[30px] border border-neutral-300 flex items-center justify-center text-neutral-500">
	      <span className="material-symbols-outlined">&#8592;</span>
	    </button>
	    {[1, 2, 3, 4, 5].map((page, index) => (
	      <button
	        key={index}
	        className={`rounded-full h-[30px] w-[30px] flex items-center justify-center ${
	          index === 0
	            ? "border border-neutral-300 text-red text-2xl"
	            : "border border-neutral-300 text-gray-500"
	        }`}
	      >
	        {page}
	      </button>
	    ))}
	    <button className="rounded-full h-[30px] w-[30px] border border-neutral-300 flex items-center justify-center text-neutral-500">
	      <span className="material-symbols-outlined">&#8594;</span>
	    </button>
	  </div>
	</div> 
            </div>
    
    </>
  )
}

export default JobsShowing