import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import UserInteractionPage from "./components/interactionPage";
import BuildResume from "./components/buildResume";

function App() {
  const [userDataSet, setUserDataSet] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    skills: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserInteractionPage userDataSet={userDataSet} setUserDataSet={setUserDataSet} />} />
        <Route path="/buildResume" element={<BuildResume userDataSet={userDataSet} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
