import React from 'react'

function CollegeShowing() {
  return (
    <>
    <br></br>
	<br></br>
	<br></br>
    <div > 
            	<div className="w-[1200px] bg-white shadow-lg rounded-lg p-6">
	  <header className="mb-6">
	    <h1 className="text-2xl font-title  text-neutral-950">Explore top universities</h1>
	    <p className="text-neutral-500 mt-2">Find the best places to study based on your preferences</p>
	  </header>
	  <div className="relative mb-8">
	    <input
	      type="text"
	      placeholder="Search"
	      className="w-1/3 py-3 px-4 rounded-md bg-neutral-100 text-neutral-900 focus:outline-none"
	    />
	    {/* <span className="material-symbols-outlined absolute top-1/2 right-4 transform -translate-y-1/2 text-neutral-400">
	      
	    </span> */}
	  </div>
	  <div className="flex flex-col gap-6">
	    {[1, 2, 3].map((_, i) => (
	      <div key={i} className="flex gap-4">
	        <img
	          src="https://tools-api.webcrumbs.org/image-placeholder/150/100/campus/1"
	          alt="University"
	          className="w-[150px] h-[100px] rounded-md object-cover"
	        />
	        <div>
	          <h2 className="text-lg font-semibold text-neutral-950">Stanford University</h2>
	          <p className="text-neutral-500">Private research university in Stanford, California Private research university in Stanford, California Private research university in Stanford, California</p>
	        </div>
	      </div>
	    ))}
	  </div>
	</div> 
            </div>
    
    </>
  )
}

export default CollegeShowing