'use client';
import React, { useState, useEffect } from 'react';

export default function RoomForm() {
  const [formData, setFormData] = useState({
    type: 'Room',
    location: '',
    rent: '',
    amenities: '',
    availableFrom: '',
  });
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch rooms on component mount
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/rooms');
      
      if (!response.ok) {
        throw new Error('Failed to fetch rooms');
      }

      const data = await response.json();
      
      // Handle both possible response formats
      const roomsData = Array.isArray(data) ? data : data?.result || [];
      
      if (!Array.isArray(roomsData)) {
        throw new Error('Invalid data format received');
      }

      setRooms(roomsData);
    } catch (err) {
      console.error('Error fetching rooms:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

      if (!response.ok) {
        throw new Error(result.message || 'Failed to add room');
      }

      alert('Room added successfully!');
      setFormData({
        type: 'Room',
        location: '',
        rent: '',
        amenities: '',
        availableFrom: '',
      });
      fetchRooms(); // Refresh the list
    } catch (err) {
      console.error('Error:', err);
      alert(err.message || 'Something went wrong.');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this room?')) return;
    
    try {
      const response = await fetch(`/api/rooms?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Failed to delete room');
      }

      alert('Room deleted successfully!');
      fetchRooms(); // Refresh the list
    } catch (err) {
      console.error('Error deleting room:', err);
      alert(err.message || 'Failed to delete room');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add Room / House</h3>
      <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light mb-5">
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select 
            className="form-select"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
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
            min="0"
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
            placeholder="WiFi, Parking, AC, etc."
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding...' : 'Add Listing'}
        </button>
      </form>

      {/* Room List Section */}
      <div className="mt-5">
        <h4>Current Listings</h4>
        {error ? (
          <div className="alert alert-danger">
            Error loading rooms: {error}
          </div>
        ) : loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : rooms.length === 0 ? (
          <p className="text-muted">No rooms listed yet</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Rent (₹)</th>
                  <th>Amenities</th>
                  <th>Available From</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room._id}>
                    <td>{room.type}</td>
                    <td>{room.location}</td>
                    <td>{room.rent}</td>
                    <td>{room.amenities || 'None'}</td>
                    <td>{room.availableFrom ? new Date(room.availableFrom).toLocaleDateString() : 'N/A'}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(room._id)}
                        className="btn btn-sm btn-danger"
                        disabled={loading}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}