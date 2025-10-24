"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { Trash2 } from "lucide-react";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <Link href={`/product/${item.id}`} className="flex gap-4 flex-1 group">
        <Image
          src={item.image}
          alt={item.name}
          width={96} // Corresponds to w-24 (24 * 4px = 96px)
          height={96} // Corresponds to h-24 (24 * 4px = 96px)
          className="w-24 h-24 object-cover rounded-md self-center"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          <p className="text-lg font-bold text-gray-900 mt-2">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-red-600 transition-colors"
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={20} />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="text-lg font-bold text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="text-lg font-bold text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
