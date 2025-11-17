"use client";
import { useCart } from "@/components/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/**
 * Displays a summary of the order, including subtotal, shipping, tax, and total.
 * It also provides action buttons like "Proceed to Checkout" or "Place Order".
 */
const OrderSummary = () => {
  const { getTotal, getTotalItems } = useCart();
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Check if the current page is the checkout page to render appropriate buttons.
  const isCheckoutPage = pathname === "/checkout";
  const subtotal = getTotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({getTotalItems()} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      {/* On the checkout page, show "Place Order". Otherwise, show "Proceed to Checkout". */}
      {isCheckoutPage ? (
        <button
          onClick={() =>
            alert("You are being redirected to the payment session...")
          }
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Place Order
        </button>
      ) : (
        // Check if user is logged in before proceeding to checkout.
        <button
          onClick={() => {
            if (user) {
              router.push("/checkout");
            } else {
              router.push("/login");
            }
          }}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      )}
      {/* On the checkout page, show "Back to Cart". Otherwise, show "Continue Shopping". */}
      {isCheckoutPage ? (
        <Link
          href="/cart"
          className="block w-full mt-3 bg-gray-100 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Back to Cart
        </Link>
      ) : (
        <Link
          href="/product"
          className="block w-full mt-3 bg-gray-100 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Continue Shopping
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;
