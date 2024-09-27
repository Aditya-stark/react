import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex justify-center text-3xl text-gray-200 bg-gray-700 p-4">
      User:{userid}
    </div>
  );
}

export default User;
