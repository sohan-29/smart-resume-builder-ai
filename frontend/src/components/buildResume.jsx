import { useState } from "react";
import ResumeForm from "./resumeForm";
import ResumePreview from "./resumePreview";
import Header from "./header";
import Footer from "./footer";
import DownloadResume from "./downloadResume";

const BuildResume = ({ userDataSet }) => {
  const [resumeData, setResumeData] = useState({});

  return (
    <>
      <Header />
      <section className="bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <ResumeForm setResumeData={setResumeData} userDataSet={userDataSet} />
        <ResumePreview data={resumeData} />
      </div>
      <DownloadResume />
      </section>
      <Footer />
    </>

  );
};

export default BuildResume;
