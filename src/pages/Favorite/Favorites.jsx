import { RiDeleteBin6Line } from "react-icons/ri";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UseFavourite from "../../Hooks/UseFavourite";

const Favorites = ({ data }) => {
  const { user } = UseAuth();
  const AxiosSecure = useAxiosSecure();
  const [,reloadData]=UseFavourite()
  console.log(user);
  const {
    productId,
    _id,
    img,
    name,
    oldPrice,
    newPrice,
    unit_of_measure,
    supplier,
    count,
  } = data;

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        productId: productId,
        email: user.email,
        name,
        img,
        newPrice,
        unit_of_measure,
        supplier,
        count: count,
      };

      AxiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          toast.success(`${name} add to the cart successfully`);
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };


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
        AxiosSecure.delete(`/favorites/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            reloadData();
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
      <div className="flex justify-between  border p-3 rounded-lg w-full md:w-80 lg:w-[480px]">
        <div className="flex items-center gap-4">
          <img src={img} alt="" className="w-40 lg:w-52 md:h-44" />
          <div className="">
            <p>{name}</p>
            <div className="flex gap-2 items-center">
              <span className="relative font-medium ">
                ${oldPrice}
                <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black rotate-12 transform -translate-y-1/2"></span>
              </span>
              <span>{newPrice}</span>
            </div>
            <button
              onClick={() => handleAddToCart(data)}
              className=" my-2 btn btn-ghost btn-sm border border-[#019267] hover:bg-[#F0592A] hover:text-white
"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="">
          <button onClick={()=>handleDelete(_id)}>
            <RiDeleteBin6Line className="text-2xl font-medium"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
