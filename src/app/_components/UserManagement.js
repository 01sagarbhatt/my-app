'use client';
import React, { useState, useEffect } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/register');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/register/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete user');
        }

        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleEdit = (user) => {
    alert(`Edit user: ${user.name}`);
  };

  if (loading) {
    return <div className="container mt-5 text-center">Loading users...</div>;
  }

  if (error) {
    return <div className="container mt-5 text-danger text-center">Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">User Management</h3>

      <div className="table-responsive shadow rounded">
        <table className="table table-hover align-middle mb-0 bg-white">
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col" className="text-center">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col" className="text-center" style={{ width: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-muted">No users found</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id} className="fw-normal">
                  <td className="text-center">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge ${user.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="text-center">
                 
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(user.id)}
                      title="Delete User"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
