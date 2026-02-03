"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/Products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";
import { useParams } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const param = useParams();
  const id = param.id;
  const product = products.find((p) => p.id === parseInt(id, 10));
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-500">{product.brand}</p>
          <div className="flex items-center">
            <div className="flex items-center">
              {product.rating && "⭐".repeat(Math.round(product.rating))}
              <span className="text-gray-600 ml-2">
                ({product.numReviews} reviews)
              </span>
            </div>
          </div>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-700">{product.description}</p>

          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Features</h2>
            <ul className="list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4 mb-2">Specifications</h2>
            <ul className="list-disc list-inside">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <span className="font-semibold capitalize">{key}:</span>{" "}
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={() => addToCart(product)}
            className="mt-4 w-full md:w-auto bg-black text-white hover:bg-gray-800"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
