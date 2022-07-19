import { Routes, Route } from "react-router-dom";
import "./App.css";
import Success from "./components/Success";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
