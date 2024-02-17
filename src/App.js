import HomePage from "./pages/homePage/HomePage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import NoPage from "./pages/noPage/NoPage";
import GetDog from "./components/getDog/GetDog";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes> */}
      <GetDog />
    </div>
  );
}

export default App;
