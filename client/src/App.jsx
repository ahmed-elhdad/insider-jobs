import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aplacations from "./pages/Aplacations";
import ApplyJob from "./pages/ApplyJob";
import "./App.css";
import { use } from "react";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./contexts/AppContext";
function App() {
  const { showRecruiterLogin } = use(AppContext);
  console.log(showRecruiterLogin);

  return (
    <>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applactions" element={<Aplacations />} />
      </Routes>
    </>
  );
}

export default App;
