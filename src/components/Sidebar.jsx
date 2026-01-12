// src/components/Sidebar.jsx
import React from "react";

/**
 * Simple SVG icon helpers (kept minimal & semantic).
 * You can replace any with Heroicons / lucide later.
 */
const IconDashboard = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="8"
      height="8"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="13"
      y="3"
      width="8"
      height="5"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="13"
      y="10"
      width="8"
      height="11"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="13"
      width="8"
      height="6"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
const IconPos = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 7h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="7"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="8.5" cy="13.5" r="1" fill="currentColor" />
  </svg>
);
const IconTable = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="6"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="14"
      width="18"
      height="6"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
const IconReservation = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 7h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="3"
      width="4"
      height="18"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
const IconDelivery = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12h13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 10v6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7" cy="18" r="1.6" fill="currentColor" />
    <circle cx="18" cy="18" r="1.6" fill="currentColor" />
  </svg>
);
const IconPayments = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="5.5"
      width="19"
      height="13"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 9h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const IconCustomer = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 20c1-4 7-5 8-5s7 .5 8 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const IconInvoice = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="12"
      height="16"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 8h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const IconTestimonial = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10v6a2 2 0 0 1-2 2H9l-5 3V6a2 2 0 0 1 2-2h12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
const IconUser = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5 20c1-4 6-5 7-5s6 .5 7 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const IconReports = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M14 9v6M10 5v10M6 13v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const IconCog = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82L4.31 4.7A2 2 0 1 1 7.14 1.88l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V1a2 2 0 1 1 4 0v.09c0 .6.4 1.13 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20 4.31l-.06.06a1.65 1.65 0 0 0-.33 1.82V7c.39.6 1 .98 1.51 1H21a2 2 0 0 1 0 4h-.09c-.5 0-1.12.39-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.0"
    />
  </svg>
);

/* MenuItem component - accepts icon (jsx), children, and active boolean */
const MenuItem = ({ icon, children, active = false }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer ${
      active
        ? "bg-gray-100 font-medium text-gray-900"
        : "text-gray-700 hover:bg-gray-50"
    }`}
  >
    <div className="w-9 h-9 flex items-center justify-center rounded-md bg-white border text-gray-600">
      {icon}
    </div>
    <span className="text-sm">{children}</span>
  </div>
);

export default function Sidebar({ active = "Pos" }) {
  // you can pass `active` prop to control which menu appears active
  return (
    <aside className="w-72 border-r bg-gray-50 p-6 hidden lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
          RB
        </div>
        <div>
          <div className="text-lg font-bold">RestroBit</div>
          <div className="text-xs text-gray-500">Point of Sale</div>
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 px-2 py-3 bg-white border rounded-lg mb-6">
        {/* avatar: replace src with your image path if available */}
        <img
          alt="profile"
          src="https://i.pravatar.cc/80?img=12"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold">Surya S</div>
          <div className="text-xs text-gray-500">Frontend Dev-UI Dev</div>
        </div>
      </div>

      {/* Primary menu */}
      <nav className="flex-1 overflow-auto">
        <div className="space-y-1 mb-4">
          <MenuItem icon={<IconDashboard />} active={active === "Dashboard"}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<IconPos />} active={active === "Pos"}>
            Pos
          </MenuItem>
          <MenuItem icon={<IconTable />} active={active === "Table"}>
            Table
          </MenuItem>
          <MenuItem
            icon={<IconReservation />}
            active={active === "Reservations"}
          >
            Reservations
          </MenuItem>
        </div>

        <div className="text-xs text-gray-400 uppercase tracking-wide px-3 mb-2">
          Offering
        </div>
        <div className="space-y-1 mb-4">
          <MenuItem icon={<IconDelivery />}>Delivery Executive</MenuItem>
          <MenuItem icon={<IconPayments />}>Payments</MenuItem>
          <MenuItem icon={<IconCustomer />}>Customer</MenuItem>
          <MenuItem icon={<IconInvoice />}>Invoice</MenuItem>
        </div>

        <div className="text-xs text-gray-400 uppercase tracking-wide px-3 mb-2">
          Back Office
        </div>
        <div className="space-y-1">
          <MenuItem icon={<IconTestimonial />}>Testimonial</MenuItem>
          <MenuItem icon={<IconUser />}>User</MenuItem>
          <MenuItem icon={<IconReports />}>Reports</MenuItem>
          <MenuItem icon={<IconCog />}>Setting</MenuItem>
        </div>
      </nav>

      {/* bottom login */}
      <div className="mt-6">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md border bg-white hover:bg-gray-50 text-sm">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 17L15 12L10 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12H3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Login
        </button>
      </div>
    </aside>
  );
}
