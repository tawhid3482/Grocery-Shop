import Swal from "sweetalert2";
import useOrder from "../../../Hooks/useOrder";

const YourOrder = () => {
  const [orderData] = useOrder();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`/order/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Canceled!",
              text: "Your order has been canceled.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-medium text-center">
          Your All Orders History
        </h1>

        <div className="overflow-x-auto my-5">
          <table className="table">
            {/* Head */}
            <thead>
              <tr className="text-lg">
                <th># No</th>
                <th>Email</th>
                <th>Order Items</th>
                <th>Total</th>
                <th>Pay Mod</th>
                <th>Delivery Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}.</th>

                  <td>{item.email}</td>

                  <td>
                    <ul>
                      {item?.cart?.map((cartItem) => (
                        <li key={cartItem._id} className="mb-2">
                          <div className="flex items-center gap-2 border p-1 rounded-lg w-60">
                            <img
                              src={cartItem.img}
                              alt={cartItem.name}
                              className="h-12 w-12 rounded"
                            />
                            <span>{cartItem.name}</span>
                            <span>
                              ({cartItem.count} {cartItem.unit_of_measure})
                            </span>
                            <span>${cartItem.price}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>${item.total[0]}</td>
                  <td>{item.paymentMethod}</td>
                  <td>
                    <div className="font-bold uppercase">
                      {item?.isDelivered === true ? (
                        <div className="relative h-12 w-full flex items-center overflow-hidden">
                          <div className=" flex items-center text-4xl">
                            <CiDeliveryTruck />
                          </div>
                          <span className="ml-4">Confirmed</span>
                        </div>
                      ) : (
                        <div className="relative h-12 w-full flex items-center overflow-hidden">
                        <div className=" flex items-center text-4xl">
                          <CiDeliveryTruck />
                        </div>
                        <span className="ml-4">Pending</span>
                      </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm bg-[#019267] text-white flex items-center gap-1"
                    >
                      <MdDelete className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
