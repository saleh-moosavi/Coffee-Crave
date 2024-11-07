import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIndex from "./pages/index/HomeIndex";
import Header from "./pages/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
