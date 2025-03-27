import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { currency } from "../App";
import { backendUrl } from "../App";

const List = ({ token }) => {
  const [list, setList] = React.useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list", {
        headers: { token },
      });
      console.log(response);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error fetching products: " + err.message);
    }
  };

  React.useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        setList((prevList) => prevList.filter((item) => item._id !== id)); // Remove the deleted product from the state
        toast.success("Product removed successfully");
      } else {
        toast.error("Error removing product: " + response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error removing product: " + err.message);
    }
  };

  return (
    <>
      <p className="mb-2">All Products</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-200 bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Products Data */}
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-200"
            >
              <img className="w-12" src={item.image[0]} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p
                onClick={() => removeProduct(item._id)}
                className="text-right md:text-center cursor-pointer text-lg"
              >
                X
              </p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
};

export default List;
