import { useState } from "react";

const AccountSettings = () => {
  // Sample user data (replace with your actual data or fetch from an API)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    subscription: {
      plan: "Premium",
      status: "Active",
    },
    // Add more user details as needed
  };

  // State to manage form data
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API calls, state updates)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Update User Profile Details */}
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        {/* Change Password */}
        <label>
          Current Password:
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {/* Manage Subscription Plan */}
        <p>
          <strong>Subscription Plan:</strong> {user.subscription.plan} (
          {user.subscription.status})
        </p>

        {/* Link Third-Party Accounts */}
        <button>Link Google Account</button>
        {/* Add more third-party account linking options as needed */}

        {/* View Usage Statistics */}
        {/* Replace this with your actual usage statistics component or logic */}
        <div className="usage-statistics">
          <p>Usage Statistics:</p>
          {/* Add your usage statistics component or logic here */}
        </div>

        {/* Submit Button */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AccountSettings;
