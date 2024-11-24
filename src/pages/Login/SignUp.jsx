import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/login/signUp.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin.jsx/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const AxiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      updateUserProfile(data.name, data.photo)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            gender:data.gender,
            photo:data.photo
          };
          console.log(data)
          AxiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              toast.success("You have successfully signed up");
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Grocery-Shop | Sign Up</title>
      </Helmet>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!</h1>
              <img src={signUp} alt="" className="w-[520px]" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Write Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 ml-2">
                      Name field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    placeholder="Your Profile Photo"
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-red-600 ml-2">
                      Photo url field is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    className="select select-bordered"
                    {...register("gender", { required: true })}
                  >
                    <option value="" disabled selected>
                      Select your gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-600 ml-2">
                      Gender field is required
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 ml-2">
                      Email field is required
                    </span>
                  )}
                </div>

                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      maxLength: {
                        value: 20,
                        message: "Password must not exceed 20 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                        message:
                          "Password must include at least one letter, one number, and one special character",
                      },
                    })}
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <span
                    className="absolute right-4 top-[50px] cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  {errors.password && (
                    <span className="text-red-600 ml-2">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary bg-[#019267] text-white hover:bg-[#F0592A]"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div className="divider ">OR</div>
              <div className="text-center mb-5">
                <SocialLogin></SocialLogin>
              </div>
              <div className="text-center mb-5">
                <p>
                  If you are already a registered member, go to{" "}
                  <Link className="text-[#F0592A]" to="/login">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
