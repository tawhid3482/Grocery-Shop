import { Helmet } from "react-helmet-async";
import UseCart from "../../Hooks/UseCart";

const CheckOut = () => {
  const [cart] = UseCart();

  // Calculate total price dynamically
  const totalPrice = cart?.reduce(
    (total, item) => total + item?.newPrice * item?.count,
    0
  );

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Cart</title>
      </Helmet>
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
          <p className="text-3xl font-medium ">Your Order</p>
          <div className="space-y-4 grid grid-cols-1 place-items-center w-full p-10">
            {cart?.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 border w-full p-1 rounded-xl "
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 md:w-24  object-cover rounded-full"
                  />

                  <p className="font-semibold text-lg">{item.name}</p>
                  <div className="flex gap-2 items-center text-gray-600">
                    <span className="text-gray-500">×</span>
                    <span className="text-gray-700">{item.count}</span>
                    <span>{item.weight}</span>
                  </div>
                </div>

                <p className="text-[#F0592A] font-semibold text-right">
                  ${item.newPrice}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 text-xl font-semibold">
            <span>Total</span>
            <span className="text-[#019267]">${totalPrice}</span>
          </div>

          <div className="mt-8">
            <ul className="space-y-4">
              <li>
                <input
                  type="radio"
                  id="bankTransfer"
                  name="payment"
                  className="mr-2"
                />
                <label htmlFor="bankTransfer" className="cursor-pointer">
                  Direct bank transfer
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="payment"
                  className="mr-2"
                />
                <label htmlFor="cashOnDelivery" className="cursor-pointer">
                  Cash on delivery
                </label>
              </li>
            </ul>
            <button className="btn bg-[#F0592A] text-white uppercase w-full my-5">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
