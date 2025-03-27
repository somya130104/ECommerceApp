import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { currency, backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderdata = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      console.log("API Response:", response.data);

      if (response.data.success && Array.isArray(response.data.orders)) {
        let orderedItems = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            orderedItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: new Date(order.date).toLocaleDateString(), // Formatting date
            });
          });
        });

        setOrderData(orderedItems.reverse());
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) loadOrderdata();
  }, [token, backendUrl]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              {item.image && item.image.length > 0 ? (
                <img
                  className="w-16 sm:w-20"
                  src={item.image[0]}
                  alt={item.name}
                />
              ) : (
                <p>No Image Available</p>
              )}
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity || "N/A"}</p>
                  <p>Size: {item.size || "N/A"}</p>
                </div>
                <p className="mt-1">
                  Date: <span className="text-gray-500">{item.date}</span>
                </p>
                <p className="mt-1">
                  Payment:{" "}
                  <span className="text-gray-500">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">
                  {item.status || "Pending"}
                </p>
              </div>
              <button
                className="border px-4 py-2 text-sm font-light rounded-sm"
                onClick={loadOrderdata}
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
