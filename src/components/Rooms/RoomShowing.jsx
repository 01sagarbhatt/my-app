import React from 'react'

function RoomShowing() {
  return (
    <>
   <div > 
            	<div className='w-[1200px] mx-auto bg-white shadow rounded-lg min-h-[500px]'>  <header className='p-5 border-b border-gray-200 flex items-center gap-4'>
	   
	    <h1 className='text-xl font-bold text-neutral-950 flex-grow'>Find Rooms</h1>
	    <div className='flex gap-3 items-center px-4 py-2 rounded-md bg-neutral-100'>
	      <input
	        type='text'
	        className='border-none bg-transparent outline-none text-neutral-950 placeholder-neutral-500 w-[200px]'
	        placeholder='New York'
	      />
	      <span className='material-symbols-outlined text-primary-500'>search</span>
	    </div>
	  </header>
	
	  <div className='p-5'>
	    <h2 className='text-lg font-title text-neutral-950'>Apartments in Dehradun</h2>
	    <p className='text-neutral-500 text-sm'>1248 results</p>
	
	    <div className='flex items-center mt-4 justify-between'>
	      {/* <div className='flex gap-3'>
	        <button className='flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 text-neutral-950'>
	          <span className='material-symbols-outlined'>filter_list</span> Price
	        </button>
	        <button className='flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 text-neutral-950'>
	          <span className='material-symbols-outlined'>apartment</span> Apartment
	        </button>
	        <button className='flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 text-neutral-950'>
	          <span className='material-symbols-outlined'>layers</span> Floor
	        </button>
	        <button className='flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 text-neutral-950'>
	          <span className='material-symbols-outlined'>more_horiz</span> More
	        </button>
	      </div> */}
	      {/* <div className='flex items-center gap-3'>
	        <div className='flex gap-1'>
	          <button className='p-2 rounded-md bg-primary-500 text-primary-50'>
	            <span className='material-symbols-outlined'>grid_view</span>
	          </button>
	          <button className='p-2 rounded-md border border-neutral-300 text-neutral-950'>
	            <span className='material-symbols-outlined'>list</span>
	          </button>
	        </div>
	        <p className='text-sm text-neutral-500'>Sort by: <span className='text-primary-500'>Price</span></p>
	      </div> */}
	    </div>
	
	    <div className='mt-5 flex flex-col gap-4'>
	      <div className='p-4 border border-neutral-200 rounded-lg flex gap-4'>
	        <img
	          src='https://tools-api.webcrumbs.org/image-placeholder/150/100/apartments/1'
	          alt='apartment'
	          className='h-[100px] w-[150px] rounded-md object-cover'
	        />
	        <div className='flex-grow'>
	          <h3 className='text-lg font-bold text-neutral-950'>The People's Brownstone</h3>
	          <p className='text-sm text-neutral-500'>1995 Broadway, New York</p>
	          {/* <p className='text-sm text-neutral-500'>
	            Wifi • Air conditioning • Kitchen • Heating • Smokers • Parking • Balcony • Animal friendly
	          </p> */}
	          <div className='flex gap-2 mt-1'>
	            {/* <span className='text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-md'>New Building</span>
	            <span className='text-xs bg-neutral-100 text-neutral-500 px-2 py-1 rounded-md'>Common Friends</span> */}
	          </div>
	          <div className='flex gap-4 items-center mt-3'>
	            <p className='text-sm text-neutral-950'>4 rooms 2 dinning store</p>
	            {/* <p className='text-sm text-neutral-950 flex items-center'>
	              <span className='material-symbols-outlined text-yellow-500'>star</span> 4.0 (7 Reviews)
	            </p> */}
	          </div>
	        </div>
	        <div className='text-right'>
	          <p className='text-lg font-title text-primary-600'>$3,000</p>
	          <p className='text-sm text-neutral-500'>/month</p>
	        </div>
	      </div>
	
	      <div className='p-4 border border-neutral-200 rounded-lg flex gap-4'>
	        <img
	          src='https://tools-api.webcrumbs.org/image-placeholder/150/100/apartments/1'
	          alt='apartment'
	          className='h-[100px] w-[150px] rounded-md object-cover'
	        />
	        <div className='flex-grow'>
	          <h3 className='text-lg font-bold text-neutral-950'>The People's Brownstone</h3>
	          <p className='text-sm text-neutral-500'>1995 Broadway, New York</p>
	          {/* <p className='text-sm text-neutral-500'>
	            Wifi • Air conditioning • Kitchen • Heating • Smokers • Parking • Balcony • Animal friendly
	          </p> */}
	          <div className='flex gap-2 mt-1'>
	            {/* <span className='text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-md'>New Building</span>
	            <span className='text-xs bg-neutral-100 text-neutral-500 px-2 py-1 rounded-md'>Common Friends</span> */}
	          </div>
	          <div className='flex gap-4 items-center mt-3'>
	            <p className='text-sm text-neutral-950'>4 rooms 2 dinning store</p>
	            {/* <p className='text-sm text-neutral-950 flex items-center'>
	              <span className='material-symbols-outlined text-yellow-500'>star</span> 4.0 (7 Reviews)
	            </p> */}
	          </div>
	        </div>
	        <div className='text-right'>
	          <p className='text-lg font-title text-primary-600'>$3,000</p>
	          <p className='text-sm text-neutral-500'>/month</p>
	        </div>
	      </div>
	    </div>
	  </div>
	</div> 
            </div>
    
    
    </>
  )
}

export default RoomShowing