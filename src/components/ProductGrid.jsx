import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

import ShrimpBasilSalad from "../assets/products/Shrimp-Basil-Salad.png";
import OnionRings from "../assets/products/Onion-Rings.jpg";
import SmokedBacon from "../assets/products/Smoked-Bacon.jpg";
import FreshTomatoes from "../assets/products/Fresh-Tomatoes.jpg";
import ChickenBurger from "../assets/products/Chicken-Burger.jpg";
import RedOnionRings from "../assets/products/Red-Onion-Rings.jpg";
import BeefBurger from "../assets/products/Beef-Burger.jpg";
import GrilledBurger from "../assets/products/Grilled-Burger.jpg";
import ChickenBurgerSmall from "../assets/products/Chicken-Burger-Small.jpg";
import FreshBasilSalad from "../assets/products/Fresh-Basil-Salad.jpg";
import VegetablePizza from "../assets/products/Vegetable-Pizza.jpg";
import FishChips from "../assets/products/Fish-Chips.jpg"; // updated // if your file uses '&', keep it; otherwise rename to Fish-Chips.jpg and update import

export default function ProductGrid({ onAdd }) {
  // same mock list as before but added category, brand & image
  const items = [
    {
      id: 1,
      title: "Shrimp Basil Salad",
      price: 180,
      category: "Salads",
      brand: "FreshSea",
      image: ShrimpBasilSalad,
    },
    {
      id: 2,
      title: "Onion Rings",
      price: 85,
      category: "Bevarages",
      brand: "CrunchyCo",
      image: OnionRings,
    },
    {
      id: 3,
      title: "Smoked Bacon",
      price: 140,
      category: "Rice",
      brand: "Farmers",
      image: SmokedBacon,
    },
    {
      id: 4,
      title: "Fresh Tomatoes",
      price: 60,
      category: "Salads",
      brand: "GreenLeaf",
      image: FreshTomatoes,
    },
    {
      id: 5,
      title: "Chicken Burger",
      price: 100,
      category: "Pizza",
      brand: "GrillHouse",
      image: ChickenBurger,
    },
    {
      id: 6,
      title: "Red Onion Rings",
      price: 89,
      category: "Bevarages",
      brand: "CrunchyCo",
      image: RedOnionRings,
    },
    {
      id: 7,
      title: "Beef Burger",
      price: 130,
      category: "Pizza",
      brand: "GrillHouse",
      image: BeefBurger,
    },
    {
      id: 8,
      title: "Grilled Burger",
      price: 110,
      category: "Pizza",
      brand: "GrillHouse",
      image: GrilledBurger,
    },
    {
      id: 9,
      title: "Chicken Burger (Small)",
      price: 85,
      category: "Rice",
      brand: "Farmers",
      image: ChickenBurgerSmall,
    },
    {
      id: 10,
      title: "Fresh Basil Salad",
      price: 250,
      category: "Salads",
      brand: "FreshSea",
      image: FreshBasilSalad,
    },
    {
      id: 11,
      title: "Vegetable Pizza",
      price: 199,
      category: "Pizza",
      brand: "GreenLeaf",
      image: VegetablePizza,
    },
    {
      id: 12,
      title: "Fish & Chips",
      price: 189,
      category: "Rice",
      brand: "SeaBites",
      image: FishChips,
    },
  ];

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["All Category", ...Array.from(set)];
  }, [items]);

  const brands = useMemo(() => {
    const set = new Set(items.map((i) => i.brand));
    return ["All Brands", ...Array.from(set)];
  }, [items]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [activePill, setActivePill] = useState("Show All");

  const pillList = ["Show All", "Rice", "Bevarages", "Salads", "Soup", "Pizza"];

  const filtered = useMemo(() => {
    return items.filter((it) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        it.title.toLowerCase().includes(searchTerm.trim().toLowerCase());
      const matchesCategory =
        selectedCategory === "All Category" || it.category === selectedCategory;
      const matchesBrand =
        selectedBrand === "All Brands" || it.brand === selectedBrand;
      const matchesPill =
        activePill === "Show All" || it.category === activePill;
      return matchesSearch && matchesCategory && matchesBrand && matchesPill;
    });
  }, [items, searchTerm, selectedCategory, selectedBrand, activePill]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
        <input
          type="text"
          className="flex-1 border rounded-lg px-4 py-2 mb-3 sm:mb-0"
          placeholder="Search in products (e.g. Onion Rings)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {pillList.map((c) => {
          const active = activePill === c;
          return (
            <button
              key={c}
              onClick={() => {
                setActivePill(c);
                if (c !== "Show All" && categories.includes(c)) {
                  setSelectedCategory(c);
                } else if (c === "Show All") {
                  setSelectedCategory("All Category");
                }
              }}
              className={`px-3 py-1 rounded-full text-sm border ${
                active
                  ? "bg-orange-100 text-orange-600 border-orange-200"
                  : "bg-white"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="p-8 text-center text-gray-500 border rounded-lg">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              onAdd={() => onAdd && onAdd(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
