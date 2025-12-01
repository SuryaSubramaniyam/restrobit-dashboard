import React, { useState, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import OrderPanel from "./components/OrderPanel";

export default function App() {
  // orders: [{ id, title, price, qty }]
  const [orders, setOrders] = useState([]);
  const [extraDiscount, setExtraDiscount] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // add product (from ProductCard)
  const addToOrder = (product) => {
    setOrders((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        // increment qty
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      // add new
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, newQty) => {
    setOrders(
      (prev) =>
        prev
          .map((p) => (p.id === id ? { ...p, qty: Math.max(0, newQty) } : p))
          .filter((p) => p.qty > 0) // remove items with 0
    );
  };

  const removeItem = (id) => {
    setOrders((prev) => prev.filter((p) => p.id !== id));
  };

  // pricing calculations
  const subtotal = useMemo(
    () => orders.reduce((s, it) => s + it.price * (it.qty || 0), 0),
    [orders]
  );

  // productDiscount: example: we show 0 or you can add logic per item (here 0)
  const productDiscount = useMemo(() => {
    // Example: if you want to apply a 0% product-wide discount
    // Or you could compute per-item discounts if product had discount field
    return 0;
  }, [orders]);

  const total = Math.max(
    0,
    subtotal -
      productDiscount -
      Number(extraDiscount || 0) -
      Number(couponDiscount || 0)
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-[1400px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex">
          <Sidebar />

          <div className="flex-1">
            <Header />
            <main className="p-6 grid grid-cols-12 gap-6">
              <section className="col-span-12 lg:col-span-8">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold">
                    Point of Sale (POS)
                  </h1>
                  <div className="bg-white border rounded-lg p-4 shadow-sm">
                    <ProductGrid onAdd={addToOrder} />
                  </div>
                </div>
              </section>

              <aside className="col-span-12 lg:col-span-4">
                <div className="bg-white border rounded-lg p-4 shadow-sm h-full">
                  <OrderPanel
                    orders={orders}
                    onInc={(id) => {
                      const it = orders.find((o) => o.id === id);
                      updateQty(id, (it?.qty || 0) + 1);
                    }}
                    onDec={(id) => {
                      const it = orders.find((o) => o.id === id);
                      updateQty(id, (it?.qty || 0) - 1);
                    }}
                    onRemove={removeItem}
                    subtotal={subtotal}
                    productDiscount={productDiscount}
                    extraDiscount={extraDiscount}
                    setExtraDiscount={setExtraDiscount}
                    couponDiscount={couponDiscount}
                    setCouponDiscount={setCouponDiscount}
                    total={total}
                  />
                </div>
              </aside>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
