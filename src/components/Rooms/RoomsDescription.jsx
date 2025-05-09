import React from 'react'
import CustomCarousel from './CustomSliders'
import images from '../Data/img';

function RoomsDescription() {
	return (
		<>

			<div >
				<div className="w-[1200px] bg-white shadow-lg rounded-lg">
					<div className="p-6">
						<div >
							<CustomCarousel>
								{images.map((image, index) => {
									return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
								})}
							</CustomCarousel>
						</div>


						<div className="border rounded-md p-6">
							<h3 className="font-semibold text-lg">2bhk Flat</h3>
							<p className="text-lg font-bold mt-2">300$</p>
							<p className="text-neutral-600 mt-2">
								level and smooth, with no curved, high, or hollow parts: An ice rink
								needs to be completely flat.
							</p>
							<button className="mt-4 bg-blue-600 text-white rounded-md h-[40px] w-[120px]">
								Contact Us
							</button>
							<img
								src="https://heera.it/wp-content/uploads/2011/11/google-maps-new-interface1.jpg"
								alt="Map"
								className="mt-4 w-1/5 h-[200px] object-center rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RoomsDescription