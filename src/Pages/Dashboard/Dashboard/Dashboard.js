import React from "react";
import { Link, Outlet } from "react-router-dom";
import MyOrders from "./MyOrders";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-green-50 p-4">
        {/* <h2 className="text-2xl text-secondary">Welcome to Hatil Furniture Dashboard</h2>  */}
        <Outlet /> 
      </div>
      <div className="drawer-side bg-blue-200 w-auto">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link to='/dashboard'>My Orders</Link> 
          </li>
          <li>
            <Link to='/dashboard/addproduct'>Add Products</Link> 
          </li>
          <li> 
            <Link to='/dashboard/allusers'>All Users</Link> 
          </li>
          <li> 
            <Link to='/dashboard/myproduct'>My Products</Link> 
          </li>
          <li> 
            <Link to='/dashboard/allsellers'>All Sellers</Link> 
          </li>
          <li> 
            <Link to='/dashboard/allbuyers'>All Buyers</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
