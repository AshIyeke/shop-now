"use client";

import { useState, useEffect } from "react";

/**
 * A form component for users to enter their shipping address.
 * @param {object} props
 * @param {function} props.onSave - Callback function to save the address.
 * @param {function} [props.onCancel] - Optional callback to cancel editing.
 * @param {object} [props.initialAddress] - Optional initial address to pre-fill the form for editing.
 */
const ShippingAddress = ({ onSave, onCancel, initialAddress }) => {
  const [address, setAddress] = useState({
    fullName: initialAddress?.fullName || "",
    street: initialAddress?.street || "",
    city: initialAddress?.city || "",
    postalCode: initialAddress?.postalCode || "",
    country: initialAddress?.country || "",
    phone: initialAddress?.phone || "",
  });

  // This effect ensures the form fields update if the initialAddress prop changes.
  // This is useful when the user switches from editing one address to adding a new one.
  useEffect(() => {
    const emptyAddress = { fullName: "", street: "", city: "", postalCode: "", country: "", phone: "" };
    setAddress(initialAddress ? { ...emptyAddress, ...initialAddress } : emptyAddress);
  }, [initialAddress]);

  /**
   * Handles changes in form input fields and updates the state.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handles form submission, performs basic validation, and calls the onSave callback.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    for (const key in address) {
      if (address[key] === "") {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }
    onSave(address);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        {initialAddress ? 'Edit Shipping Address' : 'Add a New Shipping Address'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={address.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={address.country}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={address.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Save Address
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
