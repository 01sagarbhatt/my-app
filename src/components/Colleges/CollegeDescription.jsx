import React from 'react'

function CollegeDescription() {
  return (
    <>
    
    <div > 
            	<div className="w-[1200px] bg-white shadow rounded-lg p-8">  <div className="flex items-center gap-4">
	    <img
	      src="https://tools-api.webcrumbs.org/image-placeholder/100/100/university/1"
	      alt="University Logo"
	      className="w-[80px] h-[80px] object-contain rounded-md"
	    />
	    <div>
	      <h1 className="text-xl font-title font-bold  text-neutral-900">Stanford University</h1>
	      <p className="text-neutral-700">
	        Private research university in Stanford, California<br />
	        Admissions rate: 4% · 7,087 students
	      </p>
	    </div>
	    <button className="ml-auto bg-purple-700 text-white px-6 py-2 rounded-md">
	      Visit Now
	    </button>
	  </div>
	  
	  <div className="mt-8">
	    <h2 className="text-md font-bold font-title text-black">Overview</h2>
	    <p className="text-neutral-700 mt-2">
	      Founded in 1885, Stanford University is a private research university located in the heart 
	      of Silicon Valley. Stanford is known for its pioneering research, entrepreneurial spirit, 
	      and commitment to public service. It's home to more than 9,000 students, 2,200 faculty 
	      members, and 1,800 postdoctoral scholars.
	    </p>
	  </div>
	  
	  <div className="mt-8">
	    <h2 className="text-md font-title font-bold  text-neutral-900">Academic Programs</h2>
	    <div className="flex flex-wrap gap-4 mt-4">
	      {["Undergraduate", "Graduate", "Professional", "Research", "Humanities", "Sciences", "Engineering", "Medicine", "Business", "Law"].map((program) => (
	        <span
	          key={program}
	          className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full font-medium text-sm"
	        >
	          {program}
	        </span>
	      ))}
	    </div>
	  </div>
	  
	  <div className="mt-8">
	    <h2 className="text-md font-title font-bold  text-neutral-900">Contact Information</h2>
	    <div className="mt-4 grid grid-cols-2 gap-4 text-neutral-700">
	      <div>
	        <h3 className="font-medium text-neutral-900">Address</h3>
	        <p>450 Serra Mall, Stanford, CA 94305</p>
	      </div>
	      <div>
	        <h3 className="font-medium text-neutral-900">Phone</h3>
	        <p>650-723-2300</p>
	      </div>
	      <div>
	        <h3 className="font-medium text-neutral-900">Email</h3>
	        <p>admission@stanford.edu</p>
	      </div>
	      <div>
	        <h3 className="font-medium text-neutral-900">Website</h3>
	        <p>www.stanford.edu</p>
	      </div>
	    </div>
	  </div>
	</div> 
            </div>
    
    
    </>
  )
}

export default CollegeDescription