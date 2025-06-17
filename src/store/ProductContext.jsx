import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const FetchApi = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://product-server-json.onrender.com/products");
      setProducts(res.data);
    } catch (e) {
      // Handle error if needed
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;