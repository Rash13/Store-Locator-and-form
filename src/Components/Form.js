import { useState } from "react";
import PopupModal from "./PopupModal";

export default function Form() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phoneNum: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const validationfield = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "name is required" : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email";
      case "phone":
        return /^[0-9]{10}$/.test(value) ? "" : "Enter a 10 digit phone number";
      default:
        return "";
    }
  };

  const handleError = (e) => {
    const { name, value } = e.target;
    const errorMsg = validationfield(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const key of ["name", "email", "phone"]) {
      const errorMsg = validationfield(key, userInput[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsPopupOpen(true)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name*</label>
          <input
            name="name"
            type="text"
            value={userInput.name}
            onBlur={handleError}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email*</label>
          <input
            name="email"
            type="email"
            value={userInput.email}
            onBlur={handleError}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone Number*</label>
          <input
            name="phone"
            type="text"
            value={userInput.phone}
            onBlur={handleError}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            value={userInput.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">Form Submitted!</h2>
          <p>
            <strong>Name:</strong> {userInput.name}
          </p>
          <p>
            <strong>Email:</strong> {userInput.email}
          </p>
          <p>
            <strong>Phone:</strong> {userInput.phone}
          </p>
          <p>
            <strong>Message:</strong> {userInput.message || "-"}
          </p>
      </PopupModal>

    </div>
  );
}
