
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
import useUsers from "../../../Hooks/useUsers";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const [users] = useUsers()
  console.log(users);
  const { user } = UseAuth();

  const AxiosSecure = useAxiosSecure();

  const { data: status } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/admin-status");
      return res.data;
    },
  });

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

  const pieChartData = chartData.map(data=>{
    return {name:data.category, value:data.revenue}
  })
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "back"}
      </h2>

      <div className="stats shadow w-full mx-auto">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-4xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${status?.revenue}</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{users?.length}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{status?.menuItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaShoppingCart className="text-3xl" />
          </div>
          <div className="stat-title">Orders</div>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
