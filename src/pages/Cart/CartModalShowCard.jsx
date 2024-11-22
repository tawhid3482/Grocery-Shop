import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart";

const CartModalShowCard = ({ carts }) => {
  const { _id, img, name, newPrice } = carts;
  const AxiosSecure = useAxiosSecure();
  const [,refetch]=UseCart()

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
        AxiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between gap-10 md:gap-0 border p-2 rounded-lg w-full md:w-80 ">
        <div className="flex items-center gap-4">
          <img src={img} alt="" className="w-12 h-12 md:w-20 md:h-20" />
          <div className="">
            <p>{name}</p>
            <div className="flex gap-2 items-center">
              <span>{newPrice}</span>*<span>1</span>
            </div>
          </div>
        </div>
        <div className="">
          <button onClick={() => handleDelete(_id)}>
            <RiDeleteBin6Line className="text-xl md:text-2xl font-medium"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModalShowCard;
