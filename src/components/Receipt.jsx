import React from "react";
import { useSelector } from "react-redux";

const Receipt = () => {
  const selectedProducts = useSelector(
    (state) => state.products.selectedProducts
  );
  return (
    <div className="container ">
      <h3 style={{ marginTop: "15px" }}>Your Receipt</h3>

      <div className="d-flex justify-content-center">
        <table className="table table-dark receiptTable">
          <tbody>
            {selectedProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipt;
