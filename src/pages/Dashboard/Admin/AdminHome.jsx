import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UseAuth from "../../../Hooks/UseAuth";
import { Helmet } from "react-helmet-async";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = UseAuth();
  const AxiosSecure = useAxiosSecure();

  const { data: payment } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await AxiosSecure.get("payment");
      return res.data;
    },
  });

  const { data: status } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // Helper function to filter dates within the last month
  const isWithinLastMonth = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
    return date >= oneMonthAgo && date <= new Date();
  };

  // Process payment data for charts (last month's data)
  const chartData = payment
    ?.filter((item) => isWithinLastMonth(item.date)) // Filter for last month's data
    .reduce((acc, curr) => {
      const formattedDate = new Date(curr.date).toISOString().split("T")[0]; // Format to YYYY-MM-DD
      const existing = acc.find((item) => item.category === formattedDate);
      if (existing) {
        existing.quantity = parseFloat(
          (existing.quantity + curr.price).toFixed(2)
        ); // Update quantity with two decimal places
      } else {
        acc.push({
          category: formattedDate,
          quantity: parseFloat(curr.price.toFixed(2)),
        }); // Add new entry with formatted price
      }
      return acc;
    }, []);

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Admin-Home</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-6">
        <img
          src={user?.photoURL}
          className="w-40 h-40 lg:w-60 lg:h-60 rounded-full shadow-2xl"
          alt="Profile"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            Hi Welcome {user.displayName}
          </h1>
          <p className="my-2 text-sm lg:text-base">
            Creation Time: {user?.metadata?.creationTime}
          </p>
          <p className="my-2 text-sm lg:text-base">
            Last Sign-In Time: {user?.metadata?.lastSignInTime}
          </p>
          <button className="btn bg-[#F0592A] text-white">
            Update Profile
          </button>
        </div>
      </div>



      <div className="md:stats shadow md:w-full md:mx-auto my-8 flex flex-col gap-0">
        <div className="stat bg-[#019267] text-white flex flex-col justify-center items-center p-4 h-auto rounded-none border-b border-gray-200">
          <div className="stat-figure mb-2">
            <FaDollarSign className="text-4xl sm:text-5xl" />
          </div>
          <div className="stat-title text-sm sm:text-base">Revenue</div>
          <div className="stat-value text-lg sm:text-xl">
            ${status?.revenue}
          </div>
        </div>

        <div className="stat bg-[#136303] text-white flex flex-col justify-center items-center p-4 h-auto rounded-none border-b border-gray-200">
          <div className="stat-figure mb-2">
            <FaUsers className="text-4xl sm:text-5xl" />
          </div>
          <div className="stat-title text-sm sm:text-base">Users</div>
          <div className="stat-value text-lg sm:text-xl">{status?.user}</div>
        </div>

        <div className="stat bg-[#F0592A] text-white flex flex-col justify-center items-center p-4 h-auto rounded-none border-b border-gray-200">
          <div className="stat-figure mb-2">
            <FaBook className="text-4xl sm:text-5xl" />
          </div>
          <div className="stat-title text-sm sm:text-base">Product Items</div>
          <div className="stat-value text-lg sm:text-xl">
            {status?.productItems}
          </div>
        </div>

        <div className="stat bg-[#b91db2] text-white flex flex-col justify-center items-center p-4 h-auto rounded-none">
          <div className="stat-figure mb-2">
            <FaShoppingCart className="text-4xl sm:text-5xl" />
          </div>
          <div className="stat-title text-sm sm:text-base">Orders</div>
          <div className="stat-value text-lg sm:text-xl">
            {status?.orderItems}
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="mx-auto"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar dataKey="quantity" fill="#8884d8" label={{ position: "top" }}>
            {chartData?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default AdminHome;
