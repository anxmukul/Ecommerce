import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css"
import Shop from "./routes/shop/shop";
import Cart from "./routes/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
