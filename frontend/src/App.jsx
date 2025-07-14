import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import UserInteractionPage from "./components/interactionPage";
import BuildResume from "./components/buildResume";
import LandingPage from "./components/landingPage";

function App() {
  const [userDataSet, setUserDataSet] = useState({
    name: "",
    title: "",
    email: "",
    phoneNumber: "",
    summary: "",
    education: "",
    skills: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customizeResume" element={<UserInteractionPage userDataSet={userDataSet} setUserDataSet={setUserDataSet} />} />
        <Route path="/buildResume" element={<BuildResume userDataSet={userDataSet} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
