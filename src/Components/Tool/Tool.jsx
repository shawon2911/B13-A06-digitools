import React, { use, useState } from "react";
import ToolCard from "./ToolCard";
import Cart from "../Cart/Cart";

const toolsPromise = fetch("/products.json").then((res) => res.json());
// console.log(toolsPromise);
const Tool = () => {
  const tools = use(toolsPromise);
  // console.log(tools);
  const [selectedType, setSelectedType] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center space-y-3 max-w-[300px] mx-auto md:max-w-full ">
          <h2 className="font-bold md:font-extrabold text-[38px] md:text-[45px] text-[#101727] ">
            Premium Digital Tools
          </h2>
          <p className="text-[#627382] text-[18px] md:text-[20px] px-2 ">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>

          <div className="mt-5">
            <button
              onClick={() => setSelectedType("products")}
              className={`btn ${
                selectedType === "products"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white  "
                  : "bg-white text-[#131313]"
              } 
                      rounded-l-full  `}
            >
              Products
            </button>
            <button
              onClick={() => setSelectedType("cart")}
              className={`btn ${
                selectedType === "cart"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white "
                  : "bg-white text-[#131313]"
              } 
                       rounded-r-full `}
            >
              Cart({cart.length})
            </button>
          </div>
        </div>

        {
          selectedType === "products" ?
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-15 py-10 ">
                {tools.map((tool) => (
                  <ToolCard
                   key={tool.id}
                   tool={tool}
                   cart={cart}
                   setCart={setCart}
                   ></ToolCard>
                ))}
            </div> :

            <Cart
             cart={cart}
              setCart={setCart}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              ></Cart>


        }


      </div>
    </div>
  );
};

export default Tool;
