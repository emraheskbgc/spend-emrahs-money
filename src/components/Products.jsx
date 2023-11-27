import React, { useEffect } from "react";
import Money from "./Money";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getProducts, increment } from "../redux/productsSlice";
import Receipt from "./Receipt";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const money = useSelector((state) => state.products.money);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleBuyClick = (productId) => {
    dispatch(increment({ productId }));
  };
  const handleSellClick = (productId) => {
    dispatch(decrement({ productId }));
  };
  return (
    <>
      <Money />
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 cardDiv" key={index}>
              <div className="productDiv" style={{ width: "15rem" }}>
                <img src={product.path} />
                <div>
                  <h5>{product.name}</h5>
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    ${product.price}
                  </p>
                  <button
                    onClick={() => handleSellClick(product.id)}
                    className={
                      product.quantity === 0
                        ? "btn btn-outline-danger disabled"
                        : "btn btn-outline-danger"
                    }
                  >
                    Sell
                  </button>
                  <label
                    style={{ width: "55px", height: "30px" }}
                    className="border mx-3"
                  >
                    {product.quantity}
                  </label>
                  <button
                    className={
                      money === 0 || money < product.price
                        ? "btn btn-success disabled"
                        : "btn btn-success"
                    }
                    onClick={() => handleBuyClick(product.id)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Receipt />
    </>
  );
};

export default Products;
