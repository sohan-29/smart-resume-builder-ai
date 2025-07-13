import { useState } from "react";
import ResumeForm from "./resumeForm";
import ResumePreview from "./resumePreview";
import Header from "./header";
import Footer from "./footer";

const BuildResume = ({ userDataSet }) => {
  const [resumeData, setResumeData] = useState({});

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
        <ResumeForm setResumeData={setResumeData} userDataSet={userDataSet} />
        <ResumePreview data={resumeData} />
      </div>
      <Footer />
    </>

  );
};

export default BuildResume;
