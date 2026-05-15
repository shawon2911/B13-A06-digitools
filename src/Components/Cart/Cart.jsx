import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  // console.log(cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const handleDelete = (c) => {
    const filteredItem = cart.filter((item) => item.name !== c.name);
    setCart(filteredItem);
    toast.error(`${c.name}, "is deleted!!"`);
  };
  const clearAllItem = () => {
    setCart([]);
    toast.success("Ordered placed Succesfully!")
  }
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <div className="h-50 flex justify-center items-center flex-col gap-4 border border-gray-200 rounded-2xl my-10">
            <h3 className="font-bold text-2xl">No Item Selected Yet</h3>
            <h4 className="font-semibold text-gray-500 text-2xl">
              Go to Products tab to select items
            </h4>
          </div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-2xl my-15 py-10 px-10 max-w-6xl mx-auto">
          <h3 className="font-bold text-2xl">Your Cart</h3>
          {cart.map((c, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-xl my-5 py-5 px-10 flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div className="flex items-center gap-5">
                <span className="p-3 rounded-full bg-white border border-gray-300 ">
                  <img src={c.icon} alt={c.name} />
                </span>
                <div>
                  <h3 className="font-semibold text-[20px] text-[#101727]">
                    {c.name}
                  </h3>
                  <p className="text-[16px] text-[#627382]">${c.price}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(c)}
                  className=" btn text-xl text-red-700 mt-5 md:mt-0"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="flex justify-between items-center">
            <span className="text-xl font-bold">Total:</span>{" "}
            <span className="text-2xl font-bold">${totalPrice}</span>
          </h3>
          <button onClick={clearAllItem} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] text-white w-full rounded-full py-6 mt-5">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
