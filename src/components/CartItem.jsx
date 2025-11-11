"use client";

import { useCart } from "./CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <Link href={`/product/${item.id}`} className="flex gap-4 flex-1 group">
        <Image
          src={item.image}
          alt={item.name}
          width={96}
          height={96}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
          <p className="text-lg font-bold text-gray-900 mt-2">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={20} />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
