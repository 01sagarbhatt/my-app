
"use client";

import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

import React from 'react'

function Footercomponent() {
  return (
   <>
   <Footer container>
    
      <div className="w-full"><Footer.Divider />
        <div className=" grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
           
          </div>
       
            <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        {/* <Footer.Divider /> */}
        <br />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Sehar-Sehpathi" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsGithub} />
            
          </div>
        </div>
      </div>
    </Footer>
   
   </>
  )
}

export default Footercomponent