import React from 'react'
import { Footer } from "flowbite-react";
import {  BsFacebook, BsInstagram, BsTwitter,BsMailbox } from "react-icons/bs";
function ContactUs() {
  return (
    <>
    <div id="webcrumbs"> 
            	<div className="w-[1200px] min-h-[1000px] bg-white shadow rounded-lg p-6">  <h1 className="text-4xl font-title text-neutral-950 mb-6">Contact Us</h1>
	  <p className="text-neutral-700 mb-8">
	    Questions? Feedback? We’re here to help. We typically respond within 24 hours.
	  </p>
	
	  <form className="mb-10 grid gap-4">
	    <input
	      type="text"
	      placeholder="Name"
	      className="w-full p-2 border border-neutral-300 rounded-md"
	    />
	    <input
	      type="email"
	      placeholder="Email"
	      className="w-full p-2 border border-neutral-300 rounded-md"
	    />
	    <textarea
	      placeholder="Message"
	      className="w-full p-2 h-[150px] border border-neutral-300 rounded-md"
	    ></textarea>
	    <button className="bg-black text-white text-primary-50 py-2 px-4 rounded-md mt-2">
	      Submit
	    </button>
	  </form>
	
	  <p className="text-neutral-700 mb-4">Prefer to reach out in a different way?</p>
	  <div className="flex flex-col gap-4">
	    
	     
	    
	    <div className="flex items-center gap-4 p-4 border border-neutral-200 rounded-md">
        <Footer.Icon href="#" icon={BsTwitter} />
	      <div>
	        <p className="text-primary-950 font-semibold">Twitter</p>
	        <p className="text-neutral-700 text-sm">We typically respond within 24 hours</p>
	      </div>
	    </div>
	    <div className="flex items-center gap-4 p-4 border border-neutral-200 rounded-md">
	      <Footer.Icon href="#" icon={BsInstagram} />
	      <div>
	        <p className="text-primary-950 font-semibold">Instagram</p>
	        <p className="text-neutral-700 text-sm">We typically respond within 24 hours</p>
	      </div>
	    </div>
	    <div className="flex items-center gap-4 p-4 border border-neutral-200 rounded-md">
        <Footer.Icon href="#" icon={BsFacebook} />
	      
	      <div>
	        <p className="text-primary-950 font-semibold">Facebook</p>
	        <p className="text-neutral-700 text-sm">We typically respond within 24 hours</p>
	      </div>
	    </div>
	  </div>
	
	  {/* <div className="mt-10">
	    <h2 className="text-primary-950 font-semibold text-lg mb-4">Find Answers</h2>
	    <div className="flex items-center gap-4 p-4 border border-neutral-200 rounded-md">
	      <span className="material-symbols-outlined">help</span>
	      <div>
	        <p className="text-primary-950 font-semibold">FAQ</p>
	        <p className="text-neutral-700 text-sm">Frequently Asked Questions</p>
	      </div>
	    </div>
	  </div> */}
	
	  <div className="mt-16">
	    <img 
	      src=  "https://img.freepik.com/free-vector/folded-paper-map-with-red-pin_1308-63587.jpg?t=st=1736320555~exp=1736324155~hmac=f4195177b85669d3c25b385217ffdc0c23843c53de1154af0cda47240ea8b48b&w=826"
	      alt="Stay Updated"
	      className="w-full h-[300px] rounded-lg object-center mb-8"
	    />
	    <h2 className="text-2xl font-title text-neutral-950 mb-2">Stay Updated</h2>
	    <p className="text-neutral-700 mb-4">
	      Get the latest news and updates from Project Sehar Sehpathi.
	    </p>
	    <div className="flex gap-4">
	      <input
	        type="email"
	        placeholder="Email address"
	        className="flex-grow p-2 border border-neutral-300 rounded-md"
	      />
	      <button className="bg-neutral-950 text-white text-primary-50 py-2 px-6 rounded-md">
	        Subscribe
	      </button>
	    </div>
	  </div>
	</div> 
            </div>
    
    </>
  )
}

export default ContactUs