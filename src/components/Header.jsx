import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <input
          className="w-80 rounded-lg border px-3 py-2"
          placeholder="Search (Ctrl+/)"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-lg bg-brand-500 text-white">
          + New
        </button>
        {/* <div className="w-10 h-10 rounded-full bg-gray-200" /> */}
        {/* Profile */}
        <div className="flex items-center w-10 h-10 rounded-full">
          {/* avatar: replace src with your image path if available */}
          <img
            alt="profile"
            src="https://i.pravatar.cc/80?img=12"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
