"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#0E290E]">
              ShopHub
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/product"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/account"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  title="Account"
                >
                  <User className="h-6 w-6" />
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-[#0E290E] text-white rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link
              href="/cart"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 ">
          <div className="px-4 pt-2 pb-3 space-y-3 ">
            <Link
              href="/product"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Contact Us
            </Link>
            {user ? (
              <>
                <Link
                  href="/account"
                  className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <User className="h-5 w-5" />
                  <span className="ml-3 font-medium">Account</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="ml-3 font-medium">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link
              href="/cart"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-3 font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
