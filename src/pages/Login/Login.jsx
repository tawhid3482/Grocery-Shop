import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import login from "../../assets/login/login.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const  {userLogin} = useContext(AuthContext)


  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email,password)
    .then(result =>{
      const user = result.user
      console.log(user)
    })
  };

  const handleValidate = (e) => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center  lg:text-left">
            <h1 className="text-5xl font-bold  ">Login now</h1>
            <img src={login} alt="" className="w-[520px]" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
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
                  type="text"
                  name="captcha"
                  placeholder="Fill the captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  className="btn btn-xs bg-green-700 hover:bg-[#F0592A] text-white "
                  onClick={handleValidate}
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-5">
                <input
                  type="submit"
                  className="btn btn-primary bg-[#019267] text-white hover:bg-[#F0592A]"
                  value={"Login"}
                  disabled={disabled}
                />
              </div>
            </form>
            <div className="text-center mb-5">
              <p href="">
                If you aren't a register member go to{" "}
                <Link className="text-[#F0592A]" to={"/signup"}>sign up</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
