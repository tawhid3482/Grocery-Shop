import { Helmet } from "react-helmet-async";
import video from "../../assets/vedio/vedio.mp4";
import EmailSubmit from "../Home/EmailSubmit/EmailSubmit";
import Review from "../Home/Review/Review";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | About</title>
      </Helmet>
      <div className="my-3">
        <video
          src={video}
          className="w-full h-auto"
          autoPlay
          muted
          loop
        ></video>

        <div className="flex items-center justify-center w-full md:w-[520px] mx-auto p-3 md:p-5 rounded-lg -mt-52  md:-mt-[400px] lg:-mt-[500px] lg:mb-52">
          <div className="flex flex-col items-center justify-between text-center z-10 p-4 md:p-6   rounded-lg border">
            <p className="text-xs md:text-base font-medium uppercase text-white">
              Our company
            </p>
            <p className="text-sm md:text-4xl font-medium text-white">
              We believe we can all make a difference.
            </p>
            <p className="text-base md:text-lg font-medium text-white">
              Together, we can create positive change by making mindful choices
              and taking actions that benefit our communities and the world
              around us. Every effort counts, and your contribution matters.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row  md:mt-28 lg:mt-0 my-8 gap-4">
        <div className=" md:w-1/2">
          <img
            src="https://ninetheme.com/themes/agricoma/wp-content/uploads/2023/10/slider-27-768x384.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="p-2 md:w-1/2">
          <span className="text-sm bg-[#019267] rounded-2xl p-1 text-white">
            {" "}
            Team of 30 people
          </span>
          <h3 className="text-xl lg:text-4xl my-2 ">
            Experienced and Hardworking Team
          </h3>
          <p className="text-sm lg:text-base  my-2">
            {" "}
            Inspired by the rebellious spirit of America and the intrigue of
            unwavering authenticity, R13 launched in Fall 2009. At the forefront
            of design, R13 cuts avant-garde silhouettes such as the skinny
            legging and harem pant from Italian and Turkish denim produced in
            Castelfranco, Italy. Pure indigo casting, quality stretch and
            machine hand mending give the jeans their superior...
          </p>
          <p className="text-xs font-bold  ">
            {" "}
            #denim #jeans #coats #smart #agricoma
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row-reverse  md:mt-28 lg:mt-0 gap-4">
        <div className=" md:w-1/2">
          <img
            src="https://ninetheme.com/themes/agricoma/wp-content/uploads/2024/09/slider-26-768x336.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="p-2 md:w-1/2">
          <span className="text-sm bg-[#019267] rounded-2xl p-1 text-white">
            {" "}
            20.000+ Products
          </span>
          <h3 className="text-xl lg:text-4xl my-2 ">
            Carefully Selected Quality Products
          </h3>
          <p className="text-sm lg:text-base  my-2">
            {" "}
            Inspired by the rebellious spirit of America and the intrigue of
            unwavering authenticity, R13 launched in Fall 2009. At the forefront
            of design, R13 cuts avant-garde silhouettes such as the skinny
            legging and harem pant from Italian and Turkish denim produced in
            Castelfranco, Italy. Pure indigo casting, quality stretch and
            machine hand mending give the jeans their superior...
          </p>
          <p className="text-xs font-bold  ">
            {" "}
            #denim #jeans #coats #smart #agricoma
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center flex-col md:flex-row md:w-[750px] mx-auto h-60 my-5 p-5">
        <div className="text-center">
          <h4 className="text-[#019267] font-bold text-3xl md:text-5xl">100+</h4>
          <p className="text-sm font-semibold uppercase">Expert</p>
        </div>
        <div className="text-center">
          <h4 className="text-[#019267] font-bold text-3xl md:text-5xl">
          4,000+</h4>
          <p className="text-sm font-semibold uppercase">Products</p>
        </div>
        <div className="text-center">
          <h4 className="text-[#019267] font-bold text-3xl md:text-5xl">140,00+</h4>
          <p className="text-sm font-semibold uppercase">Customers</p>
        </div>
        <div className="text-center">
          <h4 className="text-[#019267] font-bold text-3xl md:text-5xl">8</h4>
          <p className="text-sm font-semibold uppercase">Stores</p>
        </div>
       
      </div>
      <div className="my-5">
        <Review></Review>
      </div>
      <div className="mt-10">
        <EmailSubmit></EmailSubmit>
      </div>
    </div>
  );
};

export default About;
