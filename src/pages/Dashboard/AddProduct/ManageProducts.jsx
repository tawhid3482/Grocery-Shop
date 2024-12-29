import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const ManageProducts = () => {
  const AxiosPublic = useAxiosPublic();
  const AxiosSecure = useAxiosSecure();

  const [searchTerm, setSearchTerm] = useState(""); // State for the search input

  const { data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await AxiosPublic.get("/products");
      return res.data;
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
        AxiosSecure.delete(`/products/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(() => {
            toast.error("Sorry Something Wrong");
          });
      }
    });
  };

  // Filter products based on the search term
  const filteredProducts = data?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Manage Products</title>
      </Helmet>
      <div className="m-3">
        <h2 className="text-3xl font-semibold">
          Total Products: {filteredProducts?.length}
        </h2>
      </div>

      <div className="w-full my-5">
        <label className="input input-bordered flex items-center">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="text-lg bg-green-600 text-white rounded-md">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img}
                          alt="Product"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.newPrice}</td>
                <td>
                  <Link to={`/dashboard/updateProducts/${item._id}`}>
                    <button className="btn">
                      <FaEdit className="text-xl text-[#019267]" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn"
                  >
                    <FaTrash className="text-xl text-[#F0592A]" />
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

export default ManageProducts;
