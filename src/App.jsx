import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Core from "./Layouts/Core";
import HomeStyle from "./Views/Home/HomeStyle.module.scss";
import Iss from "./Views/ISS/Iss";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={HomeStyle.homeBody}>
      <Core>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iss" element={<Iss />} />
        </Routes>
      </Core>
    </div>
  );
}

export default App;
