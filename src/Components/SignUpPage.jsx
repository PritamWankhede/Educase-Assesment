import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../Components/SuccessPopup";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { fullName, phone, email, password, company } = formData;

    if (!fullName || !phone || !email || !password || !company) {
      alert("Please fill all required fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: fullName,
        email: email,
        password: password,
      })
    );

    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/login");
  };

  return (
    <>
      {showPopup && (
        <SuccessPopup
          message="Account created successfully!"
          onClose={handlePopupClose}
        />
      )}

      <div className="min-h-screen flex justify-center bg-white px-4">
        <div className="w-full max-w-sm min-h-screen flex flex-col">

          <div className="pt-8 pb-4">
            <h1 className="text-2xl font-semibold mb-6">
              Create your <br /> PopX account
            </h1>

            <form className="space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border px-3 py-2 rounded-md"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
                className="w-full border px-3 py-2 rounded-md"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full border px-3 py-2 rounded-md"
              />

              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border px-3 py-2 rounded-md"
              />

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                required
                className="w-full border px-3 py-2 rounded-md"
              />
            </form>
          </div>

          <div className="mt-auto pb-6">
            <button
              onClick={handleSignup}
              className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700"
            >
              Create Account
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Signup;
