import React, { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  //const [products, setProducts] = useState([]);
  // const fetchProduct = async () => {
  //   try {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    //fetchProduct();
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
