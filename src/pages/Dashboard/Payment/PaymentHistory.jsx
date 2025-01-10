import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const AxiosSecure = useAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await AxiosSecure.get(`/payment?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <p className="text-3xl ">Total Payment:{payments?.length}</p>

      <div className="overflow-x-auto my-5">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr className="text-lg ">
              <th>#</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>$ {payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
