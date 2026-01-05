import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../Components/SuccessPopup";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("loginEmail", email);
    localStorage.setItem("loginPassword", password);

    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/profile");
  };

  return (
    <>
      {showPopup && (
        <SuccessPopup
          message="Successfully logged in!"
          onClose={handlePopupClose}
        />
      )}

      <div className="min-h-screen flex justify-center bg-white px-4">
        <div className="w-full max-w-sm min-h-screen flex flex-col">

          <div className="pt-8 pb-2">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Signin to your <br /> PopX account
            </h1>

            <form className="space-y-4 mt-6">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </form>
          </div>

          <div className="mt-6 sticky bottom-0 bg-white pb-4">
            <button
              onClick={handleLogin}
              className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700"
            >
              Login
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
