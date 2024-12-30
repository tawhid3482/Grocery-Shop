import React from "react";
import { IoMdClose } from "react-icons/io";
import CountDown from "../../Hooks/CountDown";
import UseCart from "../../Hooks/UseCart";
import CartModalShowCard from "./CartModalShowCard";
import { BiSolidCoupon } from "react-icons/bi";
import { PiNotePencilLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


const CartModal = ({ isOpen, onClose }) => {
  const [timeLeft] = CountDown();
  const [cart] = UseCart();

  // Calculate the subtotal by summing up the newPrice values
  const subtotal = cart
    ?.reduce((acc, item) => acc + parseFloat(item.price || 0), 0)
    .toFixed(2);

  // Define the free shipping threshold
  const freeShippingThreshold = 100;
  const remainingAmount = (freeShippingThreshold - subtotal).toFixed(2);






  return (
    <div>
      <div
        className={`fixed inset-0 bg-black z-50 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed flex flex-col justify-between top-0 right-0 h-full w-60 md:w-[450px] lg:w-[520px] bg-white transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button onClick={onClose} className="p-2">
              <IoMdClose className="text-xl text-green-600" />
            </button>
          </div>

          <div className="">
            {cart && cart.length > 0 ? (
              <div className="flex items-center justify-between mx-4 border border-[#019267] p-2 bg-green-300 rounded-sm">
                <h1 className="text-sm font-semibold">
                  These products are limited, checkout within
                </h1>
                <div className="flex justify-between items-center">
                  <div className="grid md:grid-flow-col gap-4 text-center auto-cols-max">
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": timeLeft.minutes }}></span>
                      </span>
                      min
                    </div>
                    <div className="flex flex-col">
                      <span className="countdown font-mono text-xl">
                        <span style={{ "--value": timeLeft.seconds }}></span>
                      </span>
                      sec
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>

          <div className="my-8">
            {cart && cart.length > 0 ? (
              <div className="my-5 mx-4">
                <p className="text-sm font-medium uppercase">
                  {subtotal >= freeShippingThreshold
                    ? "You qualify for FREE Shipping!"
                    : `Buy $${remainingAmount} more to enjoy FREE Shipping`}
                </p>
                <div className="relative pt-1">
                  <div className="overflow-hidden text-xs flex rounded bg-pink-200">
                    <div
                      style={{
                        width: `${(subtotal / freeShippingThreshold) * 100}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 relative p-2"
                    >
                      <TbTruckDelivery className="text-2xl absolute right-1 top-[-5px] text-black " />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>

          {/* Scrollable Cart Items Section */}
          <div className="flex-1 overflow-y-auto">
            {cart && cart?.length > 0 ? (
              <div className="">
                <div className="grid grid-cols-1 gap-3 place-items-center p-4">
                  {cart?.map((carts) => (
                    <CartModalShowCard key={carts?.id} carts={carts} />
                  ))}
                </div>

                <div className="mx-4 my-5">
                  <div className="flex justify-between items-center my-2">
                    <p className="text-xl font-medium uppercase">Subtotal:</p>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <p className="text-xl font-medium uppercase">Total:</p>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <Link
                      to={"/cart"}
                      onClick={onClose}
                      className="btn bg-[#019267] text-white w-1/2"
                    >
                      View Cart
                    </Link>

                    <Link
                      to={"/checkout"}
                      className="btn w-1/2 bg-[#f84503] text-white"
                      onClick={onClose}
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="flex justify-between items-center ">
                    <button className="btn w-1/3">
                      <BiSolidCoupon className="text-3xl" />
                    </button>
                    <button className="btn w-1/3">
                      <PiNotePencilLight className="text-3xl" />
                    </button>
                    <button className="btn w-1/3">
                      <RiContactsLine className="text-3xl" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5 mx-4">
                <FiShoppingCart className="text-9xl " />
                <p className="text-xl font-bold uppercase">
                  No products in the cart.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link to={"/shop"}>
                    <button
                      onClick={onClose}
                      className="btn bg-[#019267] text-white"
                    >
                      Start Shopping
                    </button>
                  </Link>
                  <Link to={'/return'}>
                    <button
                      onClick={onClose}
                      className="btn bg-[#F0592A] text-white"
                    >
                      Return Policy
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
