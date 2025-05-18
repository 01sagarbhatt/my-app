"use client";
import React, { useState, useEffect } from "react";

export default function RoomForm() {
  const [formData, setFormData] = useState({
    type: "Room",
    location: "",
    rent: "",
    amenities: "",
    availableFrom: "",
  });
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/rooms");

      if (!response.ok) {
        throw new Error("Failed to fetch rooms");
      }

      const data = await response.json();
      const roomsData = Array.isArray(data) ? data : data?.result || [];

      if (!Array.isArray(roomsData)) {
        throw new Error("Invalid data format received");
      }

      setRooms(roomsData);
    } catch (err) {
      console.error("Error fetching rooms:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (room) => {
    setFormData({
      type: room.type,
      location: room.location,
      rent: room.rent,
      amenities: room.amenities,
      availableFrom: room.availableFrom?.slice(0, 10) || "",
    });
    setEditingRoomId(room._id);
    setIsEditing(true);
    setImages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      images.forEach((img) => formPayload.append("images", img));

      const url = isEditing ? `/api/rooms?id=${editingRoomId}` : "/api/rooms";
      const method = isEditing ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        body: formPayload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Something went wrong.");
      }

      alert(isEditing ? "Room updated!" : "Room added!");

      setFormData({
        type: "Room",
        location: "",
        rent: "",
        amenities: "",
        availableFrom: "",
      });
      setImages([]);
      setIsEditing(false);
      setEditingRoomId(null);
      fetchRooms();
    } catch (err) {
      console.error("Error:", err);
      alert(err.message || "Something went wrong.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this room?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/rooms?id=${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete room");
      }

      alert("Room deleted successfully!");
      fetchRooms();
    } catch (err) {
      console.error("Error deleting room:", err);
      alert(err.message || "Failed to delete room");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add Room / House</h3>
      <form
        onSubmit={handleSubmit}
        className="border p-4 shadow-sm rounded bg-light mb-5"
      >
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

        <div className="mb-3">
          <label className="form-label">Room Images</label>
          <input
            type="file"
            className="form-control"
            name="images"
            multiple
            accept="image/*"
            onChange={(e) => setImages([...e.target.files])}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : isEditing ? "Update Listing" : "Add Listing"}
        </button>
      </form>

      {/* Room List Section */}
      <div className="mt-5">
        <h4>Current Listings</h4>
        {error ? (
          <div className="alert alert-danger">Error loading rooms: {error}</div>
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
                    <td>{room.amenities || "None"}</td>
                    <td>
                      {room.availableFrom
                        ? new Date(room.availableFrom).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(room)}
                        className="btn btn-sm btn-warning me-2"
                        disabled={loading}
                      >
                        Edit
                      </button>
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
