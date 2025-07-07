import { useState } from "react";
import ResumeForm from "./components/resumeForm";
import ResumePreview from "./components/resumePreview";

function App() {
  const [resumeData, setResumeData] = useState({});

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      <ResumeForm onChange={setResumeData} />
      <ResumePreview data={resumeData} />
    </div>
  );
}

export default App;
