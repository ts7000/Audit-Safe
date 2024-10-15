import React, { useState } from "react";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    company: "",
    position: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="profession"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Position (Optional)
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Bio (Optional)
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-100 resize-none"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
