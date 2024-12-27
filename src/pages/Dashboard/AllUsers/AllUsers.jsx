import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BsTicketDetailed } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaUser, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const AxiosSecure = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/users");
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
        AxiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Admin it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Admin!",
              text: `Your user ${user.name} has been admin.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium ">Total All Users: {data?.length}</h1>

      <div className="overflow-x-auto my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th># No</th>
              <th>Name</th>
              <th>Email</th>
              <th>CreationTime</th>
              <th>LastSignInTime</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}.</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.metadata?.creationTime}</td>
                <td>{item.metadata?.lastSignInTime}</td>
                <td>
                  <div className="font-bold uppercase ">
                    {item?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleAdmin(item)}
                        className="btn btn-sm bg-[#019267] text-white "
                      >
                        <FaUsers className="text-2xl"></FaUsers>
                      </button>
                    )}
                  </div>
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

export default AllUsers;
