import UseProducts from "../../Hooks/UseProducts";
import { useLocation, useNavigate } from "react-router-dom";
import ProductDetails from "../Home/Products/ProductDetails";

const SearchProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const [products] = UseProducts();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  // If there’s an exact match, navigate directly to the product details page
  const exactMatch = products.find(
    (product) => product.name.toLowerCase() === query.toLowerCase()
  );

  if (exactMatch) {
    navigate(`/productsDetails/${exactMatch.id}`);
  }

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Search Results for "{query}"</h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
