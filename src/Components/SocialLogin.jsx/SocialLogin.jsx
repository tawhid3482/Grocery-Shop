import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { replace, useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = UseAuth();
  const AxiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo:result.user.photoURL
      };
      AxiosPublic.post("/users", userInfo).then((res) => {
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn w-2/3">
        <FcGoogle className="text-2xl"></FcGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
