'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
useEffect(() => {
  const fetchRooms = async () => {
    try {
      const response = await fetch('/api/rooms');
      const data = await response.json();
      console.log("API Response:", data);

      const roomArray = Array.isArray(data)
        ? data
        : Array.isArray(data.rooms)
        ? data.rooms
        : Array.isArray(data.data?.rooms)
        ? data.data.rooms
        : [];

      console.log("Room Array:", roomArray);

      setRooms(roomArray);

      const uniqueLocations = [
        ...new Set(
          roomArray
            .map((room) => room.location?.[0]?.trim())
            .filter(Boolean)
        ),
      ];
      console.log("Unique Locations:", uniqueLocations);
      setLocations(uniqueLocations);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchRooms();
}, []);


  const renderAmenities = (amenities) => {
    if (!amenities) return null;
    const items = Array.isArray(amenities)
      ? amenities
      : typeof amenities === 'string'
      ? amenities.split(',')
      : [];
    return items.map((item, index) => (
      <span key={index} className="badge bg-light text-dark me-2 mb-2">
        <i className={`bi ${getAmenityIcon(item.trim())} me-1`}></i>
        {item.trim()}
      </span>
    ));
  };

  const getAmenityIcon = (amenity) => {
    const a = amenity.toLowerCase();
    if (a.includes('wifi')) return 'bi-wifi';
    if (a.includes('parking')) return 'bi-p-square';
    if (a.includes('food')) return 'bi-egg-fried';
    return 'bi-house-door';
  };

  // Filter rooms by selected location
// Filter rooms by selected location
const filteredRooms = selectedLocation
  ? rooms.filter((room) => room.location?.[0]?.trim() === selectedLocation)
  : rooms;


  const RoomModal = ({ room, onClose }) => {
    const [previewImg, setPreviewImg] = useState(null);

    return (
      <>
        {/* Main Modal */}
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.4)', zIndex: 1050 }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{room.type} Details</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>
              <div className="modal-body">
                {room.images?.length > 0 && (
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {room.images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={`Room ${idx + 1}`}
                        width={120}
                        height={90}
                        className="image-thumbnail"
                        style={{ objectFit: 'cover', borderRadius: 8 }}
                        onClick={() => setPreviewImg(img)}
                      />
                    ))}
                  </div>
                )}
                <div className="mb-3"><strong>Location:</strong> {room.location}</div>
                <div className="mb-3"><strong>Rent:</strong> ₹{room.rent}/month</div>
                {room.availableFrom && (
                  <div className="mb-3">
                    <strong>Available from:</strong> {new Date(room.availableFrom).toLocaleDateString()}
                  </div>
                )}
                {room.amenities && (
                  <div className="mb-3">
                    <strong>Amenities:</strong>
                    <div className="d-flex flex-wrap mt-1">{renderAmenities(room.amenities)}</div>
                  </div>
                )}
                {room.description && (
                  <div className="mb-3">
                    <strong>Description:</strong>
                    <div>{room.description}</div>
                  </div>
                )}
                {room.contact && (
                  <div className="mb-3">
                    <strong>Contact:</strong> {room.contact}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Preview Modal */}
        {previewImg && (
          <div
            className="modal fade show"
            style={{
              display: 'block',
              background: 'rgba(0, 0, 0, 0.85)',
              zIndex: 1060
            }}
            onClick={() => setPreviewImg(null)}
          >
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <Image
                src={previewImg}
                alt="Preview"
                width={900}
                height={600}
                className="fullscreen-image"
              />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-primary">Available Rooms & Houses</h2>
        <p className="lead text-muted">Find your perfect accommodation</p>
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="form-label me-2 fw-semibold">Filter by Location:</label>
        <select
          className="form-select d-inline-block w-auto"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc.charAt(0).toUpperCase() + loc.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading accommodations...</p>
        </div>
      ) : filteredRooms.length > 0 ? (
        <div className="row g-4">
          {filteredRooms.map((room, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-img-top bg-secondary bg-opacity-10" style={{ height: '200px', position: 'relative' }}>
                  {room.images && room.images.length > 0 ? (
                    <Image
                      src={room.images[0]}
                      alt="Room"
                      fill
                      style={{ objectFit: 'cover', borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <i className="bi bi-house text-muted" style={{ fontSize: '3rem' }}></i>
                    </div>
                  )}
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
                      <div className="d-flex flex-wrap">{renderAmenities(room.amenities)}</div>
                    </div>
                  )}
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => setSelectedRoom(room)}
                  >
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
            <i className="bi bi-house text-muted" style={{ fontSize: '3rem' }}></i>
          </div>
          <h5 className="mb-2">No rooms available</h5>
          <p className="text-muted">Check back later for new listings</p>
        </div>
      )}

      {selectedRoom && <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
    </div>
  );
}