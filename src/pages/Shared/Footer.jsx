import { TfiAnnouncement } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-base-300  p-10 mt-2 inline-block ">
        <div className="grid  md:grid-cols-2">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <nav className="grid">
              <h6 className="footer-title">About Grocery-Shop</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid">
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid">
              <h6 className="footer-title">Quick Helps</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid">
              <h6 className="footer-title">Policies</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid mt-5">
              <h6 className="footer-title">About Grocery-Shop</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid mt-5">
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid mt-5">
              <h6 className="footer-title">Quick Helps</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
            <nav className="grid mt-5">
              <h6 className="footer-title">Policies</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Company</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Brands</a>
            </nav>
          </div>

          <nav className="mt-3 md:mt-0 md:ml-5 lg:ml-10">
            <h6 className="text-3xl font-medium ">
              Don't compromise on quality!
            </h6>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less{" "}
              <br /> normal distribution of letters. On the other hand, we
              denounce with <br />
              righteous indignation ...
            </p>
            <div className="grid grid-flow-col gap-4 my-5">
              <a href="https://x.com/Tawhidul3482" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current "
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-red-600"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100060174410562"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-blue-600"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tawhidul-islam-saikat-86b61a2a0/"
                target="_blank"
              >
                <FaLinkedinIn className="text-2xl text-blue-600"></FaLinkedinIn>
              </a>
              <a href="https://www.instagram.com/tawhid3482/" target="_blank">
                <FaInstagramSquare className="text-2xl text-pink-600"></FaInstagramSquare>
              </a>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl">
                  <TfiAnnouncement className="text-6xl text-[#019267]"></TfiAnnouncement>
                </div>
                <div className="">
                  <h4 className="text-xl font-medium">Need help? Call now!</h4>
                  <p className="text-3xl font-bold text-[#019267]">
                    01826853371
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
