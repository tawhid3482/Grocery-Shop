import { useLocation, useNavigate } from "react-router-dom";
import SearchProductDetails from "./SearchProductDetails";

const SearchProduct = () => {
  const location = useLocation();
  const { filterProduct = [], query = "" } = location.state || {};

 
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Search Results for "{query}"</h2>
      <div className="grid place-items-center grid-cols-1 gap-4">
        {filterProduct.length > 0 ? (
          filterProduct.map((pro) => (
            <div key={pro.id} >
              <SearchProductDetails pro={pro} />
            </div>
          ))
        ) : (
          <p>No products found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
