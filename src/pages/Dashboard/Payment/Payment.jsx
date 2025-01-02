import { loadStripe } from "@stripe/stripe-js";
import useOrder from "../../../Hooks/useOrder";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import ReactLoader from "../../../Components/ReactLoader";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
  const [orderData, refetch] = useOrder();
  const [loading, setLoading] = useState(true);

  // Calculate total price safely
  const totalPrice = orderData.reduce(
    (sum, item) => sum + (parseFloat(item?.total) || 0),
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await refetch(); // Ensure refetch completes
      setLoading(false);
    };

    fetchData();
  }, [refetch]);

  // Show loader during data fetch
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ReactLoader />
      </div>
    );
  }

  return (
    <div className="my-5 h-screen">
      <p className="text-4xl font-medium text-center">Complete Your Payment</p>
      <div className="flex justify-between px-5 text-xl my-5">
        <span>Pay Your Payment</span>
        <span>${totalPrice}</span>
      </div>
      <div className="my-5 p-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
