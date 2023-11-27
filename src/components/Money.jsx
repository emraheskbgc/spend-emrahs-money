import React from "react";
import { UseSelector, useSelector } from "react-redux";

const Money = () => {
  const money = useSelector((state) => state.products.money);
  return (
    <div className="moneyDiv">
      <div className="money">${money}</div>
    </div>
  );
};

export default Money;
