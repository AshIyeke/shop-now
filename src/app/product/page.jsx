"use client";

import { useState, useEffect } from "react";
import products from "@/data/Products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (lowercasedQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercasedQuery) ||
          product.description.toLowerCase().includes(lowercasedQuery)
      );
    }

    const sorted = [...filtered];
    if (sortOption === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(sorted);
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-center px-4 my-4">
        Product List ...
      </h1>
      <div className="px-4 md:px-8 mb-10">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by name or description..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8 px-4">
        <>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? "All" : category
                )
              }
              className="capitalize"
            >
              {category.toLowerCase()}
            </Button>
          ))}
        </>
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="h-9 w-full min-w-[150px] appearance-none rounded-md border border-input bg-gray-100 pl-4 pr-10 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default Sorting</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
