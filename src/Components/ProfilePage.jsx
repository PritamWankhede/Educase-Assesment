import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  if (!user) {
    return <p className="text-center mt-10">No user data found</p>;
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6">

        <h1 className="text-xl font-semibold mb-6 text-center">
          Account Settings
        </h1>

        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 rounded-full border overflow-hidden mb-2">
            <img
              src={
                profilePic ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <label className="text-sm text-purple-600 cursor-pointer">
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <h2 className="text-lg font-semibold text-center">{user.name}</h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          {user.email}
        </p>

        <div className="border-t pt-4 text-sm text-gray-600 leading-relaxed">
          <p>
            Welcome to your PopX profile. This space helps you manage your
            account details and personalize your experience. You can update
            your profile photo anytime to keep your account up to date.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
