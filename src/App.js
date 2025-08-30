import "./App.css";
import Forecast from "./Forecast";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"https://m.media-amazon.com/images/I/61nuuPxUvaL.png"}
          className="App-logo"
          alt="logo"
        />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
