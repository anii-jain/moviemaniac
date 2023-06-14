import "./App.css";
import Navbar from "./Components/Navbar";
import Movieshow from "./Components/Movieshow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetails from "./Components/Moviedetails";
import Error from "./Components/Error";
import Userpage from "./Components/Userpage";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="movie/:id" element={<Moviedetails />} />
              <Route path="user/:id" element={<Userpage />} />
              <Route path="/" element={<Movieshow />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
