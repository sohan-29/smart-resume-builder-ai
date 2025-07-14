import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";

const SelectedFieldCard = ({ selectedFields, requiredFields, handleRemovedField }) => (
  <div className="flex flex-wrap gap-2 sm:gap-3 w-full mx-auto bg-[#11111136] pt-8 px-8 pb-4 rounded-xl min-h-44">
    {selectedFields.map((field, index) => {
      const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
      return (
        <div key={index} className="flex items-center bg-[#00000018] rounded-full pl-6 shadow mb-1 sm:mb-2 h-fit w-fit">
          <h2 className="text-lg lg:text-xl lg:font-semibold">{fieldName}</h2>
          <button
            onClick={() => {
              if (!requiredFields.includes(field)) {
                handleRemovedField(field, index);
              } else {
                toast.error(`${fieldName} is a required field, don't you have any ${fieldName}!`);
              }
            }}
            className={`mb-1 mt-2 pr-3 px-1.5 h-9 w-9 ${!requiredFields.includes(field) ? " cursor-pointer" : " opacity-50"}`}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-white transition-colors duration-300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff96"></path></g></svg>
          </button>
        </div>
      );
    })}
  </div>
);

const RecommendedFieldCard = ({ recommendedFields, handleAddedField }) => (
  <div className="flex flex-wrap gap-2 sm:gap-3 w-full mx-auto bg-[#11111136] pt-8 px-5 sm:px-8 pb-4 rounded-xl min-h-44">
    {recommendedFields.map((field, index) => (
      <div key={index} className="flex items-center bg-[#00000018] rounded-full pl-6 shadow mb-4 h-fit w-fit">
        <h3 className="text-lg lg:text-xl lg:font-semibold">{field[0].toUpperCase() + field.slice(1)}</h3>
        <button
          onClick={() => handleAddedField(field, index)}
          className="mb-1 mt-2 pr-3 px-1.5 h-10 w-10 cursor-pointer group"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="group-hover:stroke-white transition-colors duration-300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#ffffff99" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#ffffff96" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
        </button>
      </div>
    ))}
  </div>
);

const UserInteractionPage = ({ userDataSet, setUserDataSet }) => {
  const navigate = useNavigate();
  const defaultRecommendedFields = [
    "linkedIn",
    "github",
    "website",
    "projects",
    "certifications",
    "experience",
    "languages",
    "volunteerExperience",
    "awards",
    "publications",
    "interests",
    "references",
  ];
  const [recommendedFields, setRecommendedFields] = useState(defaultRecommendedFields);
  const [selectedFields, setSelectedFields] = useState(Object.keys(userDataSet));
  const requiredFields = ["name", "title", "email", "phoneNumber", "summary", "education", "skills"];

  const handleRemovedField = (field, index) => {
    setSelectedFields(selectedFields.filter((_, i) => i !== index));
    setRecommendedFields([...recommendedFields, field]);
    setUserDataSet(prev => {
      const { [field]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleAddedField = (field, index) => {
    setSelectedFields([...selectedFields, field]);
    setRecommendedFields(recommendedFields.filter((_, i) => i !== index));
    setUserDataSet({ ...userDataSet, [field]: "" });
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="bg-gray-50 p-6 lg:p-9 flex flex-col my-12 rounded-xl mx-auto gap-6 w-xs md:w-2xl lg:w-4xl xl:w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mt-2 ml-3">Selected Fields :</h2>
        <SelectedFieldCard selectedFields={selectedFields} requiredFields={requiredFields} handleRemovedField={handleRemovedField} />
        <h2 className="text-2xl md:text-3xl font-bold mt-2 ml-3">Recommended Fields :</h2>
        <RecommendedFieldCard recommendedFields={recommendedFields} handleAddedField={handleAddedField} />
        <button onClick={() => navigate("/buildResume")} className="mt-4 px-6 py-3 bg-blue-500 text-white w-full mx-auto rounded-xl">Next</button>
      </div>
      <Footer />
    </>
  );
}

export default UserInteractionPage;
