import React from "react";

export default function OrderPanel({
  orders = [],
  onInc,
  onDec,
  onRemove,
  subtotal = 0,
  productDiscount = 0,
  extraDiscount = 0,
  setExtraDiscount,
  couponDiscount = 0,
  setCouponDiscount,
  total = 0,
}) {
  return (
    <div className="flex flex-col h-full">
      {/* top filters */}
      <div className="mb-4">
        <input
          className="w-full rounded-lg border px-3 py-2 mb-2"
          placeholder="Search in Existing"
        />
        <div className="flex gap-2">
          <select className="flex-1 rounded-lg border px-3 py-2">
            <option>Select Dining</option>
          </select>
          <select className="flex-1 rounded-lg border px-3 py-2">
            <option>Select Table</option>
          </select>
        </div>
      </div>

      {/* Orders list */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-3">
          {orders.length === 0 && (
            <div className="text-sm text-gray-500 p-4 border rounded">
              No items added yet.
            </div>
          )}

          {orders.map((it) => (
            <div
              key={it.id}
              className="border rounded-lg p-3 bg-gray-50 flex items-start justify-between gap-3"
            >
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                  🍽️
                </div>
                <div>
                  <h4 className="font-medium text-sm">{it.title}</h4>
                  <div className="text-sm text-orange-600">
                    ₹{it.price}.00 × {it.qty} = ₹
                    {(it.price * it.qty).toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDec && onDec(it.id)}
                    className="px-2 py-1 border rounded text-sm"
                    aria-label="decrease"
                  >
                    −
                  </button>
                  <div className="px-3 py-1 border rounded text-sm">
                    {it.qty}
                  </div>
                  <button
                    onClick={() => onInc && onInc(it.id)}
                    className="px-2 py-1 border rounded text-sm"
                    aria-label="increase"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onRemove && onRemove(it.id)}
                    className="text-sm text-red-500"
                  >
                    Delete
                  </button>
                  <button className="text-sm text-gray-500 border rounded px-2 py-1">
                    Add Notes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* billing area */}
      <div className="mt-4 border-t pt-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Sub total :</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Product Discount :</span>
            <span>₹{productDiscount.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex-1 text-sm">Extra Discount :</label>
            <input
              type="number"
              value={extraDiscount}
              onChange={(e) => setExtraDiscount(Number(e.target.value))}
              className="w-24 border rounded px-2 py-1"
            />
            <span>₹</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex-1 text-sm">Coupon discount :</label>
            <input
              type="number"
              value={couponDiscount}
              onChange={(e) => setCouponDiscount(Number(e.target.value))}
              className="w-24 border rounded px-2 py-1"
            />
            <span>₹</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Total :</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="col-span-2 bg-gray-900 text-white rounded-lg py-2">
            KOT & Print
          </button>
          <button className="bg-orange-500 text-white rounded-lg py-2">
            Bill & Payment
          </button>
          <button className="bg-green-600 text-white rounded-lg py-2">
            Bill & Print
          </button>
        </div>
      </div>
    </div>
  );
}
