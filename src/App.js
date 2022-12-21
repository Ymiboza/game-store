import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import GamePage from "./pages/game-page/game-page";
import HomePage from "./pages/home-page/home-page";
import OrderPage from "./pages/order-page/order-page";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/app/:title" element={<GamePage />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
