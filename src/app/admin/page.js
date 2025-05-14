"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!sessionStorage.getItem("admin-auth")) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin-auth");
    router.push("/login");
  };

  if (!isClient) {
    return null; // Or a loading spinner if you prefer
  }
  const menuItems = [
    {
      name: "Add Colleges",
      icon: "bi-building-add",
      path: "/admin/colleges",
      description: "Add new colleges and manage existing ones",
      color: "bg-primary",
    },
    {
      name: "Add Universities",
      icon: "bi-building",
      path: "/admin/universities",
      description: "Manage university listings and information",
      color: "bg-success",
    },
    {
      name: "Room Management",
      icon: "bi-door-open",
      path: "/admin/rooms",
      description: "Add and manage PG rooms, houses and apartments",
      color: "bg-warning",
    },
    {
      name: "User Management",
      icon: "bi-people",
      path: "/admin/users",
      description: "View and manage all registered users",
      color: "bg-info",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-evenly align-items-center mt-3">
   <h4 className="mb-4 mt-3 display-6 text-center">Admin Dashboard</h4> 
       <div className="d-flex align-items-end">
            <button onClick={handleLogout} className="btn btn-danger">
              <i className="bi bi-box-arrow-left me-2"></i>
              Logout
            </button>
          </div>
      </div>
   
      <div className="row">

        {menuItems.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-4">
            <Link href={item.path} className="text-decoration-none">
              <div className={`card text-white ${item.color} hover-shadow`}>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="me-3 p-3 rounded bg-white bg-opacity-10">
                      <i className={`bi ${item.icon} fs-2`}></i>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <p className="card-text small opacity-75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* Quick Stats Section */}
        <div className="row mt-4">
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-muted mb-2">Total Colleges</h6>
                    <h3 className="mb-0">24</h3>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <i className="bi bi-building text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-muted mb-2">Total Rooms</h6>
                    <h3 className="mb-0">156</h3>
                  </div>
                  <div className="bg-success bg-opacity-10 p-3 rounded">
                    <i className="bi bi-door-open text-success"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-muted mb-2">Active Users</h6>
                    <h3 className="mb-0">342</h3>
                  </div>
                  <div className="bg-info bg-opacity-10 p-3 rounded">
                    <i className="bi bi-people text-info"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="text-muted mb-2">Bookings</h6>
                    <h3 className="mb-0">48</h3>
                  </div>
                  <div className="bg-warning bg-opacity-10 p-3 rounded">
                    <i className="bi bi-calendar-check text-warning"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
