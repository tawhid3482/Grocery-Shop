import { Helmet } from "react-helmet-async";
import useCheckout from "../../Hooks/useCheckout";
import { Link } from "react-router-dom";
import { useState } from "react";
import UseAddress from "../../Hooks/UseAddress";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import toast from "react-hot-toast";

const CheckOut = () => {
  const [checkoutData, , refetch] = useCheckout();
  const [cart] = UseCart();
  const [addressData] = UseAddress();
  const { user } = UseAuth();
  const [selectedPayment, setSelectedPayment] = useState("");
  const AxiosSecure = useAxiosSecure();

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleOrder = async () => {
    // Calculate the subtotal, discount, and total from checkoutData
    const cartItems = checkoutData?.flatMap((item) => item.cart);
    const subTotal = checkoutData?.flatMap((item) => item.subtotal);
    const discountItems = checkoutData?.flatMap((item) => item.discount);
    const discountPriceItems = checkoutData?.flatMap(
      (item) => item.discountPrice
    );
    const totalPriceItems = checkoutData?.flatMap((item) => item.total);
    const DeleteId = checkoutData?.flatMap((item) => item._id);
    console.log(DeleteId);

    const orderInfo = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      cart: cartItems,
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
          // Handle successful order creation
          AxiosSecure.delete(`/checkout/${DeleteId}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch(); // Refetch the checkout data to clear the cart
             AxiosSecure.delete(`/carts/${user.email}`).then(res=>{
              toast.success('Your Order Confirmed')
              refetch()
             })
            }
          });
        }
      }
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | CheckOut</title>
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
            {checkoutData?.map((item) => (
              <div
                key={item._id}
                className="border rounded-xl p-4 shadow-md bg-white"
              >
                {item?.cart?.map((data) => (
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
                      ${parseFloat(data.newPrice)}
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
                  <Link to="/payment">
                    <button
                      className={`btn text-lg text-white px-5 py-2 rounded-lg transition-colors duration-300 ${
                        selectedPayment === "bankTransfer"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      disabled={selectedPayment !== "bankTransfer"}
                    >
                      Pay
                    </button>
                  </Link>
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
                    className="mr-3 h-5 w-5 cursor-pointer "
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
