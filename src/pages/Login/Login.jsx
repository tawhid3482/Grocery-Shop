import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import login from "../../assets/login/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin.jsx/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const AxiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
  
        // Store metadata in userMetadata
        const userMetadata = {
          lastSignInTime: user.metadata.lastSignInTime,
        };
  
        console.log("Last Sign-In Time:", userMetadata);
        AxiosPublic.patch(`/users/${user._id}`, userMetadata)
          .then((res) => {
            if (res.data.message) {
              toast.success("You have successfully signed in");
            }
          })
          .catch((error) => {
            console.error("Error updating lastSignInTime:", error);
            toast.error("Error updating sign-in time.");
          });
  
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Your email or password is incorrect");
        reset();  // Reset the form on error as well
      });
  };

  const handleValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Grocery-Shop | Login</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now</h1>
            <img src={login} alt="" className="w-[520px]" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 ml-2">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Password is required" })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute right-4 top-[50px] cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                {errors.password && (
                  <span className="text-red-600 ml-2">{errors.password.message}</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  onBlur={handleValidate}
                  type="text"
                  name="captcha"
                  placeholder="Fill the captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-5">
                <input
                  type="submit"
                  className="btn btn-primary bg-[#019267] text-white hover:bg-[#F0592A]"
                  value="Login"
                  disabled={disabled}
                />
              </div>
            </form>
            <div className="divider ">OR</div>
            <div className="text-center mb-5">
              <SocialLogin />
            </div>
            <div className="text-center mb-5">
              <p>
                If you aren't a registered member, go to{" "}
                <Link className="text-[#F0592A]" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
