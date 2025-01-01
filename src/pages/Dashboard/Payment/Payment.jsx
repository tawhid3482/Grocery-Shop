import useOrder from "../../../Hooks/useOrder";

const Payment = () => {
  const [orderData] = useOrder();
  const totalPrice = orderData.flatMap((item) => item?.total);
  console.log(totalPrice);
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
