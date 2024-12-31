import UseCart from "../../../Hooks/UseCart";

const Payment = () => {
  const [cart] = UseCart();
  // Calculate total price dynamically
  const totalPrice = cart
    ?.reduce((total, item) => total + item?.newPrice * item?.count, 0)
    .toFixed(2);
  return (
    <div className="my-5">
      <p className="text-4xl font-medium text-center">Complete Your Payment</p>
      <div className="flex justify-between px-5 text-xl my-5 ">
        <span>Pay Your Payment</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default Payment;
