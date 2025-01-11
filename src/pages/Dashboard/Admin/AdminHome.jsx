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
import useUsers from "../../../Hooks/useUsers";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = UseAuth();
  const AxiosSecure = useAxiosSecure();

  const { data: status } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(status);

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // custom bar chart

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom pie chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });
  return (
    <div>
      <div className="">
        <Helmet>
          <title>Grocery-Shop | Admin Home</title>
        </Helmet>
      </div>
      
      <div className="">
        <div className=" ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={user?.photoURL}
              className="w-60 rounded-full shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold mb-5">Hi Welcome {user.displayName}</h1>
              <p className="my-2 ">
                Creation Time: {user?.metadata?.creationTime}
              </p>
              <p className="my-2 ">
                Last Sign-In Time: {user?.metadata?.lastSignInTime}
              </p>
              <button className="btn bg-[#F0592A] text-white">Update Profile</button>
            </div>
          </div>
        </div>
      </div>

      <div className="stats shadow w-full mx-auto my-8 ">
        <div className="stat bg-[#019267] text-white h-32">
          <div className="stat-figure">
            <FaDollarSign className="text-4xl" />
          </div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value">${status?.revenue}</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>

        <div className="stat bg-[#136303] text-white">
          <div className="stat-figure ">
            <FaUsers className="text-4xl" />
          </div>
          <div className="stat-title text-white">Users</div>
          <div className="stat-value">{status?.user}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat bg-[#F0592A] text-white">
          <div className="stat-figure text-white">
            <FaBook className="text-3xl" />
          </div>
          <div className="stat-title text-white">Product Items</div>
          <div className="stat-value">{status?.productItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat bg-[#b91db2] text-white">
          <div className="stat-figure ">
            <FaShoppingCart className="text-3xl" />
          </div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-value">{status?.orderItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
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
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
