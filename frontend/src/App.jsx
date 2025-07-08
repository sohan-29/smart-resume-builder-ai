import { useState } from "react";
import ResumeForm from "./components/resumeForm";
import ResumePreview from "./components/resumePreview";
import UserInteractionPage from "./components/interactionPage";

function App() {
  const [resumeData, setResumeData] = useState({});
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
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
        <ResumeForm onChange={setResumeData} userDataSet={userDataSet} />
        <ResumePreview data={resumeData} />
      </div>
    </>
  );
}

export default App;
