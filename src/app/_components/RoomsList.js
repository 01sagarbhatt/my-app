'use client';
import React, { useEffect, useState } from 'react';

export default function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/rooms');
        const data = await response.json();
        if (data.success) {
          setRooms(data.result);
        } else {
          console.error('Error fetching rooms:', data.error);
        }
      } catch (error) {
        console.error('Failed to fetch rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Function to render amenities badges
  const renderAmenities = (amenities) => {
    if (!amenities) return null;
    
    return amenities.split(',').map((item, index) => (
      <span key={index} className="badge bg-light text-dark me-2 mb-2">
        <i className={`bi ${getAmenityIcon(item.trim())} me-1`}></i>
        {item.trim()}
      </span>
    ));
  };

  // Helper function for amenity icons
  const getAmenityIcon = (amenity) => {
    const lowerAmenity = amenity.toLowerCase();
    if (lowerAmenity.includes('wifi')) return 'bi-wifi';
    if (lowerAmenity.includes('parking')) return 'bi-p-square';
    if (lowerAmenity.includes('food')) return 'bi-egg-fried';
    return 'bi-house-door'; // default icon
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-primary">Available Rooms & Houses</h2>
        <p className="lead text-muted">Find your perfect accommodation</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading accommodations...</p>
        </div>
      ) : rooms.length > 0 ? (
        <div className="row g-4">
          {rooms.map((room, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-img-top bg-secondary bg-opacity-10" style={{height: '200px'}}>
                  {/* Placeholder for room image */}
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <i className="bi bi-house text-muted" style={{fontSize: '3rem'}}></i>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title fw-bold mb-0">{room.type}</h5>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      <i className="bi bi-currency-rupee me-1"></i>
                      {room.rent}/month
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-muted mb-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      {room.location}
                    </p>
                    {room.availableFrom && (
                      <p className="text-muted mb-0">
                        <i className="bi bi-calendar3 me-2"></i>
                        Available from: {new Date(room.availableFrom).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  
                  {room.amenities && (
                    <div className="mb-3">
                      <h6 className="small fw-bold mb-2">Amenities:</h6>
                      <div className="d-flex flex-wrap">
                        {renderAmenities(room.amenities)}
                      </div>
                    </div>
                  )}
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button className="btn btn-outline-primary w-100">
                    View Details <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <div className="bg-light rounded-circle d-inline-flex p-4 mb-3">
            <i className="bi bi-house text-muted" style={{fontSize: '3rem'}}></i>
          </div>
          <h5 className="mb-2">No rooms available</h5>
          <p className="text-muted">Check back later for new listings</p>
        </div>
      )}
    </div>
  );
}