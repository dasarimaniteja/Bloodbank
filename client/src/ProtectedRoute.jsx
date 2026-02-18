import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = () => {
  const { valid, role } = useAuth();
  const location = useLocation();
  const path = location.pathname;

  const donorRoutes = ["/DonorHome", "/donor", "/donationHistory"];
  const facilityRoutes = ["/bloodbank", "/donors-list", "/blood-requests", "/analytics"];

  return valid !== "true" ? (
    <Navigate to="/VLogin" />
  ) : donorRoutes.includes(path) && role !== "donor" ? (
    <Navigate to="/MFLogin" />
  ) : facilityRoutes.includes(path) && role !== "facility" ? (
    <Navigate to="/VLogin" />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
