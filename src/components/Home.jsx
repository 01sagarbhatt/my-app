import React from "react";

// import "./Landing.css";

function Home() {
  return (
    <>
    
      {/* first div */}
      <div>
        <div className="w-[1200px] bg-white">
          {" "}
          <div
            className="relative w-full h-[400px]"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1663054746828-46215eac7298?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-8">
            <h1 className="text-2xl font-title font-bold text-neutral-950 mb-4">
              Empowering newcomers to thrive in unfamiliar towns
            </h1>
            <div className="flex gap-4">
              <button className="bg-black text-white rounded-md px-6 py-2 text-sm">
                Explore
              </button>
              <button className="border border-neutral-950 text-neutral-950 rounded-md px-6 py-2 text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second Div */}
      <div >
        <div className="w-[1200px] bg-white  p-8 flex items-center gap-12">
          {" "}
          <div className="w-1/2">
            <h1 className="text-2xl font-title font-bold text-neutral-950 mb-6">
              Simplifying Relocation: Your Guide to Settling in a New Town
            </h1>
            <p className="text-neutral-700 mb-10">
            Sehar Sehpathi is a comprehensive web platform designed to ease
              the transition for migrants and students moving to unfamiliar
              towns. By providing a centralized hub of essential information and
              resources, it addresses the common challenges faced by newcomers.
            </p>
            <div className="flex gap-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-200 rounded-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-950">
                    
                  </span>
                </div>
                <div>
                  <h2 className="font-bold text-neutral-950 mb-2">Find</h2>
                  <p className="text-neutral-700">
                    Discover educational institutions, secure suitable
                    accommodation, explore job opportunities, and connect with
                    local support networks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-200 rounded-md flex items-center justify-center">
                  {/* <span className="material-symbols-outlined text-neutral-950">
                    link
                  </span> */}
                </div>
                <div>
                  <h2 className="font-bold text-neutral-950 mb-2">Connect</h2>
                  <p className="text-neutral-700">
                    Connect with local support networks to quickly establish
                    yourself and thrive in your new environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1571214453696-8852eeb35bce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="City view"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Third Div */}
      <div>
        <div className="w-[1200px] bg-white  p-8 flex flex-col items-center gap-12">
          <div className="text-center">
            <h1 className="text-3xl font-title font-bold text-neutral-950 mb-6">
              Discover a New World with Sehar-Saipathi
            </h1>
            <p className="text-neutral-700 mb-10">
              Sehar-Saipathi is a comprehensive web platform designed to ease
              the transition for migrants and students moving to unfamiliar
              towns. By providing a centralized hub of essential information and
              resources, it addresses the common challenges faced by newcomers.
            </p>
          </div>
          <div className="flex gap-8 justify-center">
            <div className="w-[30%] bg-neutral-100 p-6 rounded-md text-center">
              <img
                src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Educational institutions"
                className="h-[150px] w-full object-cover rounded-md mb-4"
              />
              <h2 className="font-bold text-neutral-950 mb-2">
                Find the Right Educational Institutions
              </h2>
              <p className="text-neutral-700 mb-6">
                Sehar-Saipathi offers guidance on finding educational
                institutions that meet your needs.
              </p>
              <button className="px-6 py-2 bg-primary-500 text-neutral-50 rounded-md">
                Learn More
              </button>
            </div>
            <div className="w-[30%] bg-neutral-100 p-6 rounded-md text-center">
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Accommodation options"
                className="h-[150px] w-full object-cover rounded-md mb-4"
              />
              <h2 className="font-bold text-neutral-950 mb-2">
                Secure Suitable Accommodation
              </h2>
              <p className="text-neutral-700 mb-6">
                Discover a range of housing options and find the perfect place
                to call home.
              </p>
              <button className="px-6 py-2 bg-primary-500 text-neutral-50 rounded-md">
                Sign Up
              </button>
            </div>
            <div className="w-[30%] bg-neutral-100 p-6 rounded-md text-center">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Job opportunities"
                className="h-[150px] w-full object-cover rounded-md mb-4"
              />
              <h2 className="font-bold text-neutral-950 mb-2">
                Explore Job Opportunities
              </h2>
              <p className="text-neutral-700 mb-6">
                Access job listings and resources to kickstart your career in
                your new town.
              </p>
              <button className="px-6 py-2 bg-primary-500 text-neutral-50 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fourth Div */}
      <div >
        <div className="w-[1200px] bg-white  p-8 flex flex-col gap-12">
          {" "}
          <div className="flex justify-between items-start">
            <div className="w-[50%]">
              <h1 className="text-4xl font-title font-bold text-neutral-950 mb-6">
                Effortlessly navigate the platform for seamless integration
              </h1>
              <p className="text-neutral-700">
                Discover how to make the most of Sehar Sehpathi with our
                step-by-step guide. From finding educational institutions and
                securing suitable accommodation to exploring job opportunities
                and connecting with local support networks, we’ve got you
                covered. Our user-friendly platform is designed to ease the
                transition for migrants and students moving to unfamiliar towns,
                providing a centralized hub of essential information and
                resources.
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              
            </div>
          </div>
          <div className="flex gap-8 justify-between">
            <div className="w-[30%] bg-neutral-100 p-6 rounded-md text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Educational institutions"
                className="h-[180px] w-full object-cover rounded-md mb-4"
              />
              <h2 className="font-bold text-neutral-950 mb-2">
                Find Educational Institutions
              </h2>
              <p className="text-neutral-700 mb-4">
                Access a comprehensive directory of educational institutions.
              </p>
            </div>
            <div className="w-[30%] bg-neutral-100 p-6 rounded-md text-center">
              <img
                src="https://plus.unsplash.com/premium_vector-1682308732216-f77739f22abc?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Accommodation options"
                className="h-[180px] w-full object-cover rounded-md mb-4"
              />
              <h2 className="font-bold text-neutral-950 mb-2">
                Secure Suitable Accommodation
              </h2>
              <p className="text-neutral-700 mb-4">
                Discover housing options that meet your needs and budget.
              </p>
            </div>
            <div className="w-[30%] bg-neutral-100 p-6 rounded-md text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1674338457396-5d6db9f30f52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Job opportunities"
                className="h-[180px] w-full object-cover rounded-md mb-4"
              />
              <h2 className="font-bold text-neutral-950 mb-2">
                Explore Job Opportunities
              </h2>
              <p className="text-neutral-700 mb-4">
                Access job listings and resources to kickstart your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Div */}
      <div >
        <div className="w-[1200px] bg-white  p-8 flex flex-col gap-12">
          {" "}
          <div className="flex justify-between items-start gap-8">
            <div className="w-[50%]">
              <h2 className="text-sm font-semibold text-neutral-700 uppercase mb-2">
                Empowering
              </h2>
              <h1 className="text-5xl font-title font-bold text-neutral-950 mb-6 leading-tight">
                Our Mission: Empowering Migrants and Students
              </h1>
              <p className="text-neutral-700  leading-relaxed">
                At Sehar Sehpathi, our mission is to empower migrants and
                students by providing them with the essential information and
                resources they need to navigate their new environments. We
                understand the challenges they face when moving to unfamiliar
                towns, and we are committed to making their transition as smooth
                as possible. Whether it's finding educational institutions,
                securing suitable accommodation, exploring job opportunities, or
                connecting with local support networks, our user-friendly
                website is designed to simplify the relocation process and help
                our users quickly establish themselves and thrive in their new
                homes.
              </p>
              <div className="flex gap-4 mt-6">
              
               
              </div>
            </div>
            <div className="w-[40%]">
              <img
                src="https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our mission image"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Div */}

      <div >
        <div className="w-[1200px] bg-white  p-10 flex flex-col items-center gap-10">
          {" "}
          <div className="text-center">
            <div className="text-2xl flex justify-center text-primary-500 mb-4">
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 ms-1 text-yellow-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed">
            Sehar Sehpathi has been a game-changer for me. It provided me with
              all the necessary information and resources to smoothly transition
              to a new town. I am grateful for this platform and highly
              recommend it to anyone in a similar situation.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-title text-2xl text-neutral-950">
              Discover a New Beginning
            </h2>
            <span className="text-neutral-500 text-lg">++</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-neutral-950 text-neutral-50 px-6 py-3 rounded-md">
              Sign Up
            </button>
            <button className="border border-neutral-950 text-neutral-950 px-6 py-3 rounded-md">
              Explore
            </button>
          </div>
        </div>
      </div>

   
    </>
  );
}

export default Home;
