"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col">
      <div className="relative h-48 w-full bg-[#E8E2E2] rounded-t-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-grow mt-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-500 text-md mt-1">{product.brand}</p>
        <div className="flex items-center mt-2">
          <p className="mr-2">
            {product.rating && "⭐".repeat(Math.round(product.rating))}
          </p>
          <p className="text-sm text-gray-600">({product.numReviews})</p>
        </div>
        <p className="text-lg font-semibold mt-2 flex-grow">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <Button
        asChild
        className="w-full bg-gray-300 mt-4 hover:bg-gray-400 cursor-pointer"
      >
        <Link href={`/product/${product.id}`}>View Details</Link>
      </Button>
    </div>
  );
}
