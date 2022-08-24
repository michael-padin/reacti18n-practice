import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Profile } from "./pages/";
import "./styles/global.css";

function App() {
  
  return (
    <div className="App" >
      <Suspense fallback = {<h1>Loading....</h1>}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
