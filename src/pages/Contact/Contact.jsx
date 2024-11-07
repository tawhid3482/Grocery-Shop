import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
        <Helmet>
        {" "}
        <title>Grocery-Shop | Contact</title>{" "}
      </Helmet>
      <div className="">
        <div className="w-full lg:w-[850px] mx-auto md:my-8 p-5 ">
          <h4 className="text-2xl lg:text-4xl font-bold text-center">
            {" "}
            Whether you have a question, feedback, or need support, we're just a
            message away.
          </h4>
          <p className="text-sm text-center">
            Reach out to us with any questions, feedback, or inquiries. Our team
            is ready to assist you and looks forward to connecting with you
          </p>
        </div>

        <div className="flex justify-between flex-col lg:flex-row p-5 ">
          <div className="lg:w-1/2 p-5">
            <p className="text-2xl font-semibold">Send a Message</p>

            <label className="form-control w-full  my-2">
              <div className="label">
                <span className="label-text uppercase"> your name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full my-2">
              <div className="label">
                <span className="label-text uppercase"> your email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full  my-2">
              <div className="label">
                <span className="label-text uppercase">subject</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full  my-2">
              <div className="label">
                <span className="label-text uppercase">
                  Your message (optional)
                </span>
              </div>
              <textarea
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              ></textarea>
            </label>
            <button className="btn bg-[#019267] text-white uppercase w-full">Submit</button>
          </div>
          <div className="lg:w-1/2 flex justify-between flex-col md:flex-row p-5 ">
            <div className="md:w-1/2">
              <p className="text-2xl font-semibold mb-5">Our Showroom</p>
              <p>
                551 Water Color Green Ball St, <br /> New York, NY 2041, USA{" "}
                <br />
                +09000 000 34 35 <br />
                +09000 000 34 36
              </p>
            </div>
            <div className="md:w-1/2 my-5 md:my-0">
              <p className="text-2xl font-semibold mb-5">Quick Help</p>
              <NavLink to={"/whatsapp"}>
                <div className="flex items-center border border-[#019267] p-2 rounded-xl gap-4 my-3">
                  <FaWhatsapp className="text-4xl font-bold bg-[#019267] text-white"></FaWhatsapp>
                  <p className="text-sm uppercase font-medium">
                    Whatsapp Customer Services
                  </p>
                </div>
              </NavLink>
              <p>
                You can ask anything you want to know about our products <br />
                tawhidulislam3481@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
