import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="" element={<Products />}></Route>
        <Route exact path="carts" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
