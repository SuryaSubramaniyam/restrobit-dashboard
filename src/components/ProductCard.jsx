import React from "react";

export default function ProductCard({ id, title, price, image, onAdd }) {
  // fallback handler if image fails to load
  const handleImgError = (e) => {
    e.currentTarget.style.display = "none"; // hide broken image
    // optional: show fallback by adding a small emoji element after hide
    const fallback = document.createElement("div");
    fallback.textContent = "🍽️";
    fallback.className =
      "w-full h-28 bg-gray-50 rounded-lg mb-3 flex items-center justify-center text-3xl";
    e.currentTarget.parentNode.insertBefore(fallback, e.currentTarget);
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col bg-white">
      {/* image area */}
      {image ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          onError={handleImgError}
          className="w-full h-28 bg-gray-50 rounded-lg mb-3 object-cover"
        />
      ) : (
        <div className="w-full h-28 bg-gray-50 rounded-lg mb-3 flex items-center justify-center text-3xl">
          🍽️
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-2 text-orange-500 font-semibold">₹{price}.00</div>
        </div>

        <button
          onClick={onAdd}
          className="ml-auto mt-3 rounded-full bg-orange-100 px-3 py-2 text-orange-600 hover:bg-orange-200"
          aria-label={`Add ${title}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
