import { NavLink, useLocation } from "react-router-dom";
import SearchProductDetails from "./SearchProductDetails";
import notFound from "../../assets/Error/noData.png";

const SearchProduct = () => {
  const location = useLocation();
  const { filterProduct = [], query = "" } = location.state || {};

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Search Results for "{query}"</h2>
      <div className="grid place-items-center grid-cols-1 gap-4">
        {filterProduct.length > 0 ? (
          // Only pass the product details to SearchProductDetails
          <SearchProductDetails 
            product={filterProduct[0]} 
            similarProducts={filterProduct.length > 1 ? filterProduct.slice(1) : []}
          />
        ) : (
          <div className="flex items-center flex-col">
            <img src={notFound} className="w-full md:w-[450px] border" alt="No data found" />
            <NavLink to={"/"}>
              <button className="btn bg-[#019267] hover:bg-[#F0592A] text-white my-5">
                Go Back
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
