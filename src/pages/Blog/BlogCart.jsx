import React from "react";

const BlogCart = ({ blog }) => {
  const { img, title, details, date } = blog;
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="lg:w-60 lg:h-72 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="py-6 text-sm">
             {details}
            </p>
            <p className="text-xs">{date}</p>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BlogCart;
