import { useState } from "react";

const AccountSettings = () => {
  // here we are using the useState hook to store the form data
  const [formData, setFormData] = useState({
    name: "Aditya Raj Verma",
    email: "vadityaraj67@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // here this is a handler function that will be called ..
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col gap-10">
      <h2 className="md:text-4xl text-3xl underline underline-offset-4">
        Account Settings
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="md:flex">
          <div className="justify-between flex p-2 flex-col">
            <label className="text-left">Full Name:</label>
            <input
              type="text"
              className="p-2 hover:bg-transparent hover:transition-all 5s ease-linear rounded-md sm:w-full"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className=" justify-between flex p-2 flex-col">
            <label className="text-left">Email:</label>
            <input
              type="email"
              className="p-2  hover:bg-transparent hover:transition-all 5s ease-linear rounded-md"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className=" justify-between flex p-2 flex-col">
          <label className="text-left">Current Password:</label>
          <input
            type="password"
            className="p-2  hover:bg-transparent hover:transition-all 5s ease-linear rounded-md"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className=" justify-between flex p-2 flex-col">
          <label className="text-left">New Password:</label>
          <input
            type="password"
            className="p-2  hover:bg-transparent hover:transition-all 5s ease-linear rounded-md"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
        </div>

        <div className=" justify-between flex p-2 flex-col">
          <label className="text-left">Confirm Password</label>
          <input
            type="password"
            className="p-2  hover:bg-transparent hover:transition-all 5s ease-linear rounded-md"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        {/* linking all the buttons */}
        <button className="hover:text-yellow-500">Link Google Account</button>
        <button className="hover:text-yellow-500">Save All</button>
      </form>
    </div>
  );
};

// exporting the component
export default AccountSettings;
