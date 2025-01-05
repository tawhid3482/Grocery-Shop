import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { format } from "date-fns";

const ManageCoupon = () => {
  const AxiosSecure = useAxiosSecure();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      try {
        const res = await AxiosSecure.get("/coupon");
        return res.data;
      } catch (err) {
        throw new Error("Failed to fetch coupons");
      }
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`/coupon/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your coupon has been deleted.", "success");
            }
          })
          .catch((err) => {
            console.error("Error deleting coupon:", err);
            Swal.fire("Error!", "Failed to delete the coupon.", "error");
          });
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching coupons</div>;

  return (
    <div>
      <div>
        <h1 className="text-2xl font-medium">All Coupons: {data?.length}</h1>

        <div className="overflow-x-auto my-5 dark:text-white">
          <table className="table">
            <thead>
              <tr className="text-lg">
                <th># No</th>
                <th>Coupon Code</th>
                <th>Expire Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}.</th>
                    <td>{item.code}</td>
                    <td>{format(new Date(item.expire), "PP")}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-sm bg-[#019267] text-white"
                        aria-label={`Delete coupon ${item.code}`}
                      >
                        <MdDelete className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No coupons found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupon;
