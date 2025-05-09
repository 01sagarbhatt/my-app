import React from 'react'

function JobDescription() {
  return (
    <>
    <div > 
            	<div className="w-[1200px] bg-white shadow-lg rounded-lg p-8">  <header className="flex justify-between items-center border-b pb-6 mb-6">
	    <h1 className="text-2xl font-bold text-neutral-900">Job Details</h1>
	    {/* <nav className="text-sm text-primary-500">
	      Home / Find Job / Graphics & Design / Job Details
	    </nav> */}
	  </header>
	  <main className="flex gap-8">
	    <section className="flex-1">
	      <h2 className="text-xl font-bold text-neutral-900 mb-4">
	        Senior UX Designer
	      </h2>
	      <span className="bg-blue-600 text-white text-sm rounded-full px-4 py-1 inline-block font-bold mr-2">
	        FULL-TIME
	      </span>
	      
	      <p className="mt-6 text-sm text-neutral-700 leading-loose">
	        Velstar is a Shopify Plus agency, and we partner with brands to help
	        them grow, we also do the same with our people!
	      </p>
	      <h3 className="text-lg font-bold text-neutral-900 mt-6">Job Description</h3>
	      <p className="mt-4 text-sm text-neutral-700 leading-loose">
	        Here at Velstar, we don’t just make websites, we create exceptional
	        digital experiences that consumers love. Our team of designers,
	        developers, strategists, and creators work together to push brands to
	        the next level. From Platform Migration, User Experience & User
	        Interface Design, to Digital Marketing, we have a proven track record
	        in delivering...
	      </p>
	      
	      <h3 className="text-lg font-bold text-neutral-900 mt-6">Requirements</h3>
	      <ul className="list-disc pl-5 mt-4 text-sm text-neutral-700 leading-loose">
	        <li>
	          Great troubleshooting and analytical skills combined with the desire
	          to tackle challenges head-on.
	        </li>
	        <li>
	          3+ years of experience in back-end development working with multiple
	          smaller projects.
	        </li>
	        <li>Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel.</li>
	       
	      </ul>
	    </section>
	    <aside className="w-[350px] p-6 bg-neutral-50 rounded-lg">
	      <div className="mb-6">
	        <h3 className="text-lg font-bold text-neutral-900">Salary (USD)</h3>
	        <p className="text-red-600 text-2xl font-bold">$100,000 - $120,000</p>
	        <p className="text-sm text-neutral-700">Yearly salary</p>
	      </div>
	      <div className="mb-6">
	        <h3 className="text-lg font-bold text-neutral-900">Job Overview</h3>
	        <ul className="mt-4 text-sm text-neutral-700 leading-loose">
	          <li>Job Posted: 14 Jun, 2021</li>
	          <li>Job Expire: 14 Aug, 2021</li>
	          <li>Experience: $50k-$80k/month</li>
	          <li>Education: Graduation</li>
	          <li>Job Level: Entry Level</li>
	        </ul>
	      </div>
	      <a
	        href="#"
	        className="block bg-purple-700 text-white text-center text-sm rounded-md py-3 font-bold"
	      >
	        Apply Now
	      </a>
	    </aside>
	  </main>
	</div> 
            </div>
    
    
    </>
  )
}

export default JobDescription