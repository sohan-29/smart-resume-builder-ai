import { useState } from "react";
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
    <>
      <UserInteractionPage userDataSet={userDataSet} setUserDataSet={setUserDataSet} />
      <BuildResume userDataSet={userDataSet} />
    </>
  );
}

export default App;
