import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useOrder from "../../../Hooks/useOrder";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { user } = UseAuth();
  const navigate = useNavigate();
  const AxiosSecure = useAxiosSecure();
  const [orderData, refetch] = useOrder();

  const totalPrice = orderData.reduce(
    (sum, item) => sum + (parseFloat(item?.total) || 0),
    0
  );
  console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      AxiosSecure.post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)})
        .catch((err) => {
          console.error("Error creating payment intent:", err);
          setError("Failed to initiate payment.");
        });
    }
  }, [AxiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      setProcessing(false);
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("Payment error:", error);
      setError(error.message);
      setProcessing(false);
      return;
    }else{
      console.log(paymentMethod);
      setError("");
    }

    if (!clientSecret) {
      setError("Payment initialization failed. Please try again.");
      setProcessing(false);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.error("Payment confirmation error:", confirmError);
      setError("Payment failed. Please try again.");
      setProcessing(false);
      return;
    }else{
      console.log(paymentIntent);
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        orderID: orderData.map((item) => item._id),
        status: "pending",
      };

      try {
        const res = await AxiosSecure.post("/payments", payment);
        if (res.data?.insertedId) {
          toast.success("Payment Successful");
          refetch();
          navigate("/dashboard/paymentHistory");
        } else {
          toast.error("Payment saving failed.");
        }
      } catch (err) {
        console.error("Error saving payment:", err);
        toast.error("Payment saving failed.");
      }
    }
    setProcessing(false);
  };

  return (
    <form
      className="dark:bg-slate-700 text-black dark:text-white"
      onSubmit={handleSubmit}
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#039c12",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm bg-[#019267] my-4 text-white"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        {processing ? "Processing..." : "Pay"}
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-500">Your Transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;