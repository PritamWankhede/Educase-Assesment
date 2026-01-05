import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center bg-white px-4">
      <div className="w-full max-w-sm min-h-screen flex flex-col">

        <div className="mt-auto pb-10 text-center">

          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome to PopX
          </h1>

          <p className="text-gray-500 mb-6">
           Connect, manage, and grow your
            account effortlessly with PopX.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-purple-200 text-gray-900 py-3 rounded-md font-medium hover:bg-purple-300 transition"
            >
              Already Registered? Login
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Welcome;
