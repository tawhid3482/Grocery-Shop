import { Helmet } from "react-helmet-async";
import UseAuth from "../../../Hooks/UseAuth";

const UserHome = () => {
  const {user}=UseAuth()
    return (
        <div>
        <Helmet>
          <title>Grocery-Shop | User Home</title>
        </Helmet>
        <p className="text-3xl font-semibold my-2">Welcome {user.displayName}</p>
  
        <div className=" mt-10 grid grid-cols-1 md:flex md:items-start  gap-3 md:gap-10 lg:gap-20">
          <div className="">
            <img src={user.photoURL} className="w-52 rounded-full" alt="" />
          </div>
          <div className="">
            <h2 className="text-xl font-medium">
              Position: <span className="text-[#019267]">User</span>
            </h2>
            <h2 className="text-xl font-medium mt-3">
              Full Name: <br />{" "}
              <span className="text-[#019267] ">{user.displayName}</span>
            </h2>
            <h2 className="text-xl font-medium mt-3">
              Email: <br /> <span className="text-[#019267]">{user.email}</span>
            </h2>
          </div>
          </div>
          </div>
    );
};

export default UserHome;
