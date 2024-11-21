import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import CartModal from "../../Cart/CartModal";
import UseProducts from "../../../Hooks/UseProducts";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser();
    toast.success("You have successfully logout");
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // search
  const [product] = UseProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterProducts, setFilterProduct] = useState(product);

  const handleSearch = () => {
    const filterPro = product?.filter((item) =>
      item?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProduct(filterPro);
    navigate("/search", {
      state: { filterProduct: filterPro, query: searchTerm },
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-base-100 p-3">
        <div>
          <img src={logo} alt="Logo" className="w-14 h-10 md:w-24 md:h-14" />
        </div>

        <div className="hidden md:flex items-center w-96 md:w-auto border border-[#019267] rounded-xl relative">
          <input
            type="text"
            placeholder="Search"
            className="input w-60 h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={handleCartClick} className="btn btn-circle relative">
            <BsCart3 className="text-3xl" />
            <div className="bg-[#F0592A] text-white rounded-2xl p-1 absolute -top-2 -right-2">
              +1
            </div>
          </button>

          <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />

          <Link to="/favorite" className="btn btn-circle relative">
            <MdFavoriteBorder className="text-3xl" />
            <div className="bg-[#F0592A] text-white rounded-2xl p-1 absolute -top-2 -right-2">
              +4
            </div>
          </Link>

          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle avatar">
              {user ? (
                <img
                  alt="User Avatar"
                  src={user?.photoURL}
                  className="w-9 rounded-full"
                />
              ) : (
                <img
                  alt="User Avatar"
                  src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                  className="w-9 rounded-full"
                />
              )}
            </button>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {user ? (
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                  <li>
                    <Link
                      className="hover:bg-[#F0592A] hover:text-white"
                      to="/dashboard"
                    >
                      {user?.displayName}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-[#F0592A] hover:text-white"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      className="hover:bg-[#F0592A] hover:text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10  w-52 p-2 shadow">
                  <li>
                    <Link
                      className="hover:bg-[#F0592A] hover:text-white"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
