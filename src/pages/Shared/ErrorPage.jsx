import { Link } from "react-router-dom";
import error from "../../assets/Error/Error.webp";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={error} alt="" className="w-[950px]" />
      <Link to={"/"}>
        <button className="btn bg-[#019267] text-white uppercase  w-40">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
