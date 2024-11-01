import { SiMinutemailer } from "react-icons/si";

const EmailSubmit = () => {
  return (
    <div>
      <div className="bg-[#019267] p-3 md:p-4 lg:p-7 my-5 md:rounded-full">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex items-center gap-4 mb-2 md:mb-4 ml:mb-0 flex-col md:flex-row">
            <div className=" flex items-center gap-1 mb-0">
              <SiMinutemailer className="text-white  text-4xl lg:text-5xl" />

              <h3 className="md:text-xl lg:text-2xl font-bold text-white">
                Sign Up to Newsletter
              </h3>
            </div>
            <p className="text-sm lg:text-lg font-medium text-yellow-300">
              ...and receive $20 coupon for first shopping
            </p>
          </div>
          <div className=" flex items-center text-black bg-white p-[6px] lg:p-2 rounded-3xl ">
            <input
              type="text"
              className="w-full md:w-96 p-1 lg:p-2 "
              placeholder="Your E-mail"
            />
            <button className="ml-2 bg-yellow-400 p-2 rounded-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubmit;
