'use client';
import React, { useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ankit Singh', email: 'ankit@example.com', role: 'Editor' },
    { id: 2, name: 'Sagar Rawat', email: 'sagar@example.com', role: 'Customer' }
  ]);

  const handleDelete = (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleEdit = (user) => {
    alert(`Edit user: ${user.name}`);
    // Modal ya edit form open kar sakte ho yahan
  };

  return (
    <div className="container mt-5">
      <h3>User Management</h3>

      <table className="table table-bordered table-striped mt-3 shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="5" className="text-center">No users found</td></tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
