import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function Profile() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then(navigate("/", { replace: true }));
  };
  return (
    <div className="text-center">
      <h2 className="text-4xl ">This is the Profile page. </h2>
      <h2 className="text-4xl mb-6 ">You can see this only if you are logged in.</h2>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
