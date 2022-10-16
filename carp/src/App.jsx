import { Footer } from "./components/footer";
import "./App.css";
import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { FirstPage } from "./components/firstPage";
import { ThridPage } from "./components/thirdPage";
import { SecondPage } from "./components/secondPage";
const tele = window.Telegram.WebApp;
export const App = () => {
  useEffect(() => {
    tele.ready();
  });
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThridPage />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
