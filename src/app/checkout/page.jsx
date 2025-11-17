"use client";

import OrderSummary from "@/components/OrderSummary";
import ShippingAddress from "@/components/ShippingAddress";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";

/**
 * CheckoutPage component manages the checkout process, including shipping address
 * management and order summary display.
 */
const CheckoutPage = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  // State for storing all saved shipping addresses
  const [addresses, setAddresses] = useState([]);
  // State for the index of the currently selected address
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  // State to toggle between displaying addresses and showing the address form
  const [isEditing, setIsEditing] = useState(false);
  // State to hold the address being edited, or null if adding a new one
  const [editingAddress, setEditingAddress] = useState(null);

  // Redirect to cart if it's empty
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems, router]);

  // Load addresses from localStorage on component mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("shippingAddresses");
      if (stored) {
        const storedAddresses = JSON.parse(stored);
        if (Array.isArray(storedAddresses) && storedAddresses.length > 0) {
          setAddresses(storedAddresses);
          setSelectedAddressIndex(0);
          setIsEditing(false);
        } else {
          setIsEditing(true); // No addresses, open form
        }
      } else {
        setIsEditing(true); // No addresses, open form
      }
    } catch (error) {
      console.error(
        "Failed to parse shipping addresses from localStorage",
        error
      );
      setIsEditing(true); // If error, show form
    }
  }, []);

  /**
   * Saves a new or edited address to the address list and localStorage.
   * @param {object} address - The address object to save.
   */
  const handleSaveAddress = (address) => {
    const newAddresses = [...addresses];
    if (editingAddress && editingAddress.id !== undefined) {
      // Editing existing address
      const index = addresses.findIndex((a) => a.id === editingAddress.id);
      newAddresses[index] = { ...address, id: editingAddress.id };
    } else {
      // Adding new address
      newAddresses.push({ ...address, id: Date.now() });
    }
    setAddresses(newAddresses);
    localStorage.setItem("shippingAddresses", JSON.stringify(newAddresses));
    setIsEditing(false);
    setEditingAddress(null);
  };

  /**
   * Deletes an address from the list and localStorage.
   * @param {number} indexToDelete - The index of the address to delete.
   */
  const handleDeleteAddress = (indexToDelete) => {
    const newAddresses = addresses.filter(
      (_, index) => index !== indexToDelete
    );
    setAddresses(newAddresses);
    localStorage.setItem("shippingAddresses", JSON.stringify(newAddresses));

    if (newAddresses.length === 0) {
      setIsEditing(true);
    } else if (selectedAddressIndex >= indexToDelete) {
      setSelectedAddressIndex(Math.max(0, selectedAddressIndex - 1));
    }
  };

  /**
   * Sets the component state to edit an existing address.
   * @param {number} index - The index of the address to edit.
   */
  const handleEdit = (index) => {
    setEditingAddress(addresses[index]);
    setIsEditing(true);
  };

  /**
   * Sets the component state to add a new address.
   */
  const handleAddNew = () => {
    setEditingAddress(null);
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>

          {isEditing && (
            <ShippingAddress
              onSave={handleSaveAddress}
              initialAddress={editingAddress}
              onCancel={() => {
                setIsEditing(false);
                setEditingAddress(null);
              }}
            />
          )}

          {!isEditing && (
            <>
              <div className="space-y-4">
                {addresses.map((address, index) => (
                  <div
                    key={address.id}
                    className={`p-4 rounded-lg border-2 ${
                      selectedAddressIndex === index
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="shippingAddress"
                          id={`address-${index}`}
                          checked={selectedAddressIndex === index}
                          onChange={() => setSelectedAddressIndex(index)}
                          className="mt-1.5 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`address-${index}`}
                          className="flex-1 text-sm"
                        >
                          <p className="font-semibold text-gray-900">
                            {address.fullName}
                          </p>
                          <p className="text-gray-600">{address.street}</p>
                          <p className="text-gray-600">
                            {address.city}, {address.postalCode},{" "}
                            {address.country}
                          </p>
                          <p className="text-gray-600">
                            Phone: {address.phone}
                          </p>
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-gray-500 hover:text-blue-600"
                          title="Edit Address"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteAddress(index)}
                          className="text-gray-500 hover:text-red-600"
                          title="Delete Address"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button to open the 'add new address' form */}
              <button
                onClick={handleAddNew}
                className="w-full flex items-center justify-center gap-2 text-blue-600 font-medium py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Plus size={20} />
                Add a New Address
              </button>
            </>
          )}
        </div>
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
