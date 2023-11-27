import React from "react";
import { useSelector } from "react-redux";

const Receipt = () => {
  const selectedProducts = useSelector(
    (state) => state.products.selectedProducts
  );
  const totalPrice = useSelector((state) => state.products.totalPrice);
  return (
    <div className="container ">
      <h3 style={{ marginTop: "15px" }}>Your Receipt</h3>

      <div className="d-flex justify-content-center">
        <table className="table table-dark receiptTable">
          <tbody>
            {selectedProducts.map((product, index) => (
              <tr key={index}>
                {product.quantity > 0 && (
                  <>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
          {totalPrice > 0 && (
            <>
              <h5>
                TOTAL PRİCE = <span>${totalPrice}</span>
              </h5>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default Receipt;
