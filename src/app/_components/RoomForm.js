'use client';
import React, { useState } from 'react';

export default function RoomForm() {
  const [formData, setFormData] = useState({
    type: 'Room',
    location: '',
    rent: '',
    amenities: '',
    availableFrom: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Room added successfully!');
      console.log(result);

      // ✅ Clear form fields
      setFormData({
        type: 'Room',
        location: '',
        rent: '',
        amenities: '',
        availableFrom: '',
      });
    } else {
      alert(`Failed: ${result.message}`);
    }
  } catch (err) {
    console.error('Error:', err);
    alert('Something went wrong.');
  }
};


  return (
    <div className="container mt-5">
      <h3>Add Room / House</h3>
      <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">

        <div className="mb-3">
          <label className="form-label">Type</label>
          <select 
            className="form-select"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Room">Room</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="PG">PG</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input 
            type="text" 
            className="form-control" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Monthly Rent (₹)</label>
          <input 
            type="number" 
            className="form-control" 
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Available From</label>
          <input 
            type="date" 
            className="form-control" 
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amenities (comma-separated)</label>
          <input 
            type="text" 
            className="form-control" 
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Listing</button>
      </form>
    </div>
  );
}
