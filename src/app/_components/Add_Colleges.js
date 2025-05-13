"use client";
import { useState } from "react";

const Add_Colleges = () => {
const [collegeName, setCollegeName] = useState("");
const [collegeAddress, setCollegeAddress] = useState("");
const [contactNumber, setContactNumber] = useState("");
const [collegeDescription, setCollegeDescription] = useState("");
const [inputError, setInputError] = useState(false);

function clearFields(event) {
  // we have to convert event.target to array
  // we use from method to convert event.target to array
  // after that we will use forEach function to go through every input to clear it
  //  Array.from(event.target).forEach((e) => (e.value = ""));
  setCollegeName('');
  setCollegeAddress('');
  setContactNumber('');
  setCollegeDescription('');


};

const handleAddButtonClick = async (event) => {
  event.preventDefault();
  if(!collegeName || !collegeAddress || !contactNumber || !collegeDescription){
    setInputError(true);
    return false;
  }else
  {
    setInputError(false);
  }

  
    alert(
      collegeName+collegeAddress+contactNumber+collegeDescription,
    
      );

    try{
      let response = await fetch("/api/institutions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collegeName,
          collegeAddress,
          contactNumber,
          collegeDescription,
     
        }),

      });
if(response.ok){
  console.log("Raw Response", response);
  alert("College Added Successfully");
} else {
  const errorData = await response.json();
  alert(`Error: ${errorData.message}`);
}
    }catch{
      console.error("Error adding college details:");
      alert("Failed to add college details. Please try again.");
    }
    clearFields(event);

};
  return (
    <>
      <div>
        <h1 className="display-6 text-center mt-3">Add College & Universites Details</h1>
      
          <div className="container w-50">
            <div className="row mb-3 justify-content-center">
            <form onSubmit={handleAddButtonClick}>
              <div>
              <input type="text" value={collegeName} onChange={(e)=> setCollegeName(e.target.value)} placeholder="Enter College Name" className="mt-3 form-control"></input>
              {
                inputError && !collegeName && <span style={{color:"red"}}>please enter college name</span>
              }
              </div>
              <div>
              <input type="text" value={collegeAddress} onChange={(e)=> setCollegeAddress(e.target.value)} placeholder="Enter College Address" className="mt-3 form-control"></input>
              {
                inputError && !collegeAddress && <span style={{color:"red"}}>please enter college address</span>
              }
              </div>
              <div>
              <input type="text" value={contactNumber} onChange={(e)=> setContactNumber(e.target.value)} placeholder="Enter Contact Number" className="mt-3 form-control"></input>
              {
                inputError && !contactNumber && <span style={{color:"red"}}>please enter number</span>
              }
              </div>
              <div>
              <input type="text" value={collegeDescription} onChange={(e)=> setCollegeDescription(e.target.value)} placeholder="Enter Description" className="mt-3 form-control"></input>
              {
                inputError && !collegeDescription && <span style={{color:"red"}}>please enter college description</span>
              }
              </div>
              
                <div>
            <button type="submit"  className="mt-2 btn btn-primary w-100">Add New College</button>
              </div>
              </form>
            </div>
          </div>
      
      </div>
    </>
  );
};
export default Add_Colleges;
