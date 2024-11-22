import React from "react";
import UseFavourite from "../../../Hooks/UseFavourite";
import { FaCartPlus } from "react-icons/fa6";
import { BsTicketDetailed } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Favorite = () => {
  const [favorite, reloadData] = UseFavourite();
  const navigate = useNavigate();
  const AxiosSecure = useAxiosSecure();

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

  const handleNavigate = (id) => {
    navigate(`/productsDetails/${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-medium ">
        Your Favorite Items: {favorite.length}
      </h1>

      <div className="overflow-x-auto my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th># No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Add To Cart</th>
              <th>About</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {favorite.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}.</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>${item.newPrice}</p>
                </td>
                <td>
                  {" "}
                  <button className="btn bg-[#019267] text-white btn-sm">
                    <FaCartPlus className="text-2xl"></FaCartPlus>
                  </button>
                </td>
                <td>
                  {/* <Link to={`/productsDetails/${item.id}`}> */}
                  <button
                    onClick={() => handleNavigate(item?.productId)}
                    className="btn btn-sm bg-[#019267] text-white "
                  >
                    <BsTicketDetailed className="text-2xl"></BsTicketDetailed>
                    Details
                  </button>
                  {/* </Link> */}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn btn-sm bg-[#019267] text-white "
                  >
                    <MdDelete className="text-2xl"></MdDelete>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorite;
