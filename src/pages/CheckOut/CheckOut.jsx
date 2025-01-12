import { Helmet } from "react-helmet-async";
import useCheckout from "../../Hooks/useCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAddress from "../../Hooks/UseAddress";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import toast from "react-hot-toast";
import ReactLoader from "../../Components/ReactLoader";
import { v4 as uuidv4 } from "uuid";

const CheckOut = () => {
  const [checkoutData, , reFetch] = useCheckout();
  const [cart, refetch] = UseCart();
  const [addressData] = UseAddress();
  const { user } = UseAuth();
  const [selectedPayment, setSelectedPayment] = useState("");
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {

    //  const hasReloaded = localStorage.getItem("hasReloaded");

    // if (!hasReloaded) {
    //   localStorage.setItem("hasReloaded", "true");
    //   window.location.reload();
    // }
    reFetch();
    refetch();
    <div className="">
      <ReactLoader />
    </div>;
  }, [reFetch, refetch]);

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleOrder = async () => {
    const subTotal = checkoutData?.flatMap((item) => item.subtotal);
    const discountItems = checkoutData?.flatMap((item) => item.discount);
    const discountPriceItems = checkoutData?.flatMap(
      (item) => item.discountPrice
    );
    const totalPriceItems = checkoutData?.flatMap((item) => item.total);
    const DeleteId = checkoutData?.flatMap((item) => item._id);

    const orderInfo = {
      id: uuidv4(),
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      cart: cart,
      subtotal: subTotal,
      discount: discountItems,
      discountPrice: discountPriceItems,
      total: totalPriceItems,
      address: addressData,
      paymentMethod: "Cash on Delivery",
      isOrderConfirmed: true,
    };

    try {
      if (checkoutData.length > 0) {
        const response = await AxiosSecure.post("/order", orderInfo);
        if (response.data) {
          await AxiosSecure.delete(`/checkout/${DeleteId}`);
          await AxiosSecure.delete(`/carts?email=${user.email}`);
          reFetch(); // Refetch checkout data
          refetch(); // Refetch cart data
          toast.success("Your Order Confirmed");
          navigate("/dashboard/paymentHistory");
        }
      }
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  const handleBankOrder = async () => {
    const subTotal = checkoutData?.flatMap((item) => item.subtotal);
    const discountItems = checkoutData?.flatMap((item) => item.discount);
    const discountPriceItems = checkoutData?.flatMap(
      (item) => item.discountPrice
    );
    const totalPriceItems = checkoutData?.flatMap((item) => item.total);
    const DeleteId = checkoutData?.flatMap((item) => item._id);

    const orderInfo = {
      id: uuidv4(),
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      cart: cart,
      subtotal: subTotal,
      discount: discountItems,
      discountPrice: discountPriceItems,
      total: totalPriceItems,
      address: addressData,
    };

    try {
      if (checkoutData.length > 0) {
        const response = await AxiosSecure.post("/order", orderInfo);
        if (response.data) {
          await AxiosSecure.delete(`/checkout/${DeleteId}`);
          await AxiosSecure.delete(`/carts?email=${user.email}`);
          reFetch();
          refetch();
        }
      }
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  const handleSSLBankOrder = async () => {
    const subTotal = checkoutData?.flatMap((item) => item.subtotal);
    const discountItems = checkoutData?.flatMap((item) => item.discount);
    const discountPriceItems = checkoutData?.flatMap(
      (item) => item.discountPrice
    );
    const totalPriceItems = checkoutData?.flatMap((item) => item.total);
    const DeleteId = checkoutData?.flatMap((item) => item._id);

    const orderInfo = {
      id: uuidv4(),
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      bank_name: "SSL-Commerz",
      cart: cart,
      subtotal: subTotal,
      discount: discountItems,
      discountPrice: discountPriceItems,
      total: totalPriceItems,
      address: addressData,
    };

    try {
      if (checkoutData.length > 0) {
        const response = await AxiosSecure.post("/order", orderInfo).then(
          (res) => {
            AxiosSecure.delete(`/checkout/${DeleteId}`);
            AxiosSecure.delete(`/carts?email=${user.email}`);
            reFetch();
            refetch();
            console.log(res.data.url);
            window.location.replace(res.data.url);
          }
        );
      }
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Checkout</title>
      </Helmet>

      {/* Header Section */}
      <div className="h-48 bg-[#F1FFE1] w-full flex flex-col justify-center items-center text-center gap-3">
        <p className="text-5xl font-semibold text-[#019267] uppercase">
          Checkout
        </p>
        <p className="text-xs my-2 text-[#019267] uppercase">
          HOME {">"} <span className="text-red-600">Checkout</span>
        </p>
      </div>

      <div className="p-5">
        <div>
          <p className="text-3xl font-medium mb-8">Your Order</p>
          {/* Order Items */}
          <div className="w-full">
            {checkoutData.length > 0 &&
              checkoutData?.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-xl p-4 shadow-md bg-white"
                >
                  {cart?.map((data) => (
                    <div
                      key={data._id}
                      className="flex items-center justify-between gap-4 mb-4 border border-green-400 p-2 rounded-lg"
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={data.img}
                          alt={data.name}
                          className="w-16 h-16 md:w-24 object-cover rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-lg text-gray-800">
                            {data.name}
                          </p>
                          <div className="flex gap-2 items-center text-gray-600 text-sm">
                            <span className="text-gray-500">x</span>
                            <span>{data.count}</span>
                            <span>{data.unit_of_measure}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#F0592A] font-semibold">
                        ${parseFloat(data.price)}
                      </p>
                    </div>
                  ))}
                  <div className="mt-6">
                    <div className="flex justify-between text-xl font-semibold">
                      <span>Subtotal</span>
                      <span className="text-[#019267]">${item.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold">
                      <span>Discount</span>
                      <span className="text-[#019267]">
                        -${item.discountPrice}
                      </span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold">
                      <span>Total Pay</span>
                      <span className="text-[#019267]">${item.total}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Payment Options */}
          <div className="mt-12">
            <p className="text-2xl font-medium mb-6">Payment Options</p>
            <ul className="space-y-6">
              <li>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bankTransfer"
                      name="payment"
                      value="bankTransfer"
                      onChange={handlePaymentChange}
                      className="mr-3 h-5 w-5 cursor-pointer"
                    />
                    <label
                      htmlFor="bankTransfer"
                      className="cursor-pointer text-lg font-medium text-gray-800 dark:text-white"
                    >
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className={`btn text-lg text-white px-5 py-2 rounded-lg transition-colors duration-300 ${
                        selectedPayment === "bankTransfer"
                          ? "bg-[#019267] hover:bg-[#F0592A]"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      disabled={selectedPayment !== "bankTransfer"}
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Bank
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg">
                          Select Your Bank Type
                        </h3>
                        <div className="flex justify-between items-center my-5">
                          <Link to="/payment">
                            <button
                              className="btn bg-[#F0592A] text-white"
                              onClick={handleBankOrder}
                            >
                              Stripe
                            </button>
                          </Link>

                          <button
                            onClick={handleSSLBankOrder}
                            className="btn bg-[#F0592A] text-white"
                          >
                            SSl-Commerz
                          </button>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="payment"
                    value="cashOnDelivery"
                    onChange={handlePaymentChange}
                    className="mr-3 h-5 w-5 cursor-pointer"
                  />
                  <label
                    htmlFor="cashOnDelivery"
                    className="cursor-pointer text-lg font-medium text-gray-800 dark:text-white"
                  >
                    Cash on Delivery
                  </label>
                </div>
              </li>
            </ul>
            <button
              onClick={handleOrder}
              className={`btn uppercase w-full mt-8 py-3 rounded-lg text-lg text-white ${
                selectedPayment === "cashOnDelivery"
                  ? "bg-[#F0592A] hover:bg-[#d4481f]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={selectedPayment !== "cashOnDelivery"}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
