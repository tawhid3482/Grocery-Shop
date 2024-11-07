import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BlogCart from "./BlogCart";
import EmailSubmit from "../Home/EmailSubmit/EmailSubmit";

const Blog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
        {" "}
        <title>Grocery-Shop | Blog</title>{" "}
      </Helmet>
      <div className="">
        <div className="h-48 bg-[#F1FFE1] w-full flex flex-col justify-center items-center text-center">
          <p className="text-5xl font-semibold text-[#019267]">BLOG</p>
          <p className="text-xs my-2 text-[#019267]">HOME {">"} BLOG</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data?.map((blog) => (
            <BlogCart key={blog?.id} blog={blog}></BlogCart>
          ))}
        </div>
        <div className="">
          <EmailSubmit></EmailSubmit>
        </div>
      </div>
    </div>
  );
};

export default Blog;
