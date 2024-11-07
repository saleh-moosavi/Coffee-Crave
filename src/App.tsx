import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIndex from "./pages/index/HomeIndex";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <div className="bg-amber-800/5">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeIndex />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
