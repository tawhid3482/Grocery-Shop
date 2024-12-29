import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";
import ReactLoader from "../Components/ReactLoader";


const AdminRoute = ({ children }) => {
  const {user, loading} = UseAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <ReactLoader></ReactLoader>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
