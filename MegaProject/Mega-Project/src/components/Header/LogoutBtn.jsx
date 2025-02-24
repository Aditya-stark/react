import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logoutState } from "../../Store/authSlice";

export default function LogoutBtn() {
  const dispatch = useDispatch(); 
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logoutState());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
