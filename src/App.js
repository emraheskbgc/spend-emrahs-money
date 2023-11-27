import { useSelector } from "react-redux";
import Header from "./components/Header";

import Products from "./components/Products";

function App() {
  const items = useSelector((state) => state.products.items);
  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
