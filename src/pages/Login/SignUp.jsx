import { Link } from "react-router-dom";
import signUp from "../../assets/login/signUp.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
const SignUp = () => {

  const  {createUser} = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email,password)
    .then(result =>{
      const user = result.user
      console.log(user)
    })
  };






  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center  lg:text-left">
            <h1 className="text-5xl font-bold  ">Sign up now!</h1>
            <img src={signUp} alt="" className="w-[520px]" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Write Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your Profile Photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary bg-[#019267] text-white hover:bg-[#F0592A]"
                  value={"Sign Up"}
                />
              </div>
            </form>
            <div className="text-center mb-5">
              <p href="">
                If you already register member go to{" "}
                <Link className="text-[#F0592A]" to={"/login"}>
                  login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
