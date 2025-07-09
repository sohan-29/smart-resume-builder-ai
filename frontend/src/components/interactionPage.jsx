import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
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

  // Load from localStorage if available, else use defaults
  const getInitialSelectedFields = () => {
    const saved = localStorage.getItem("selectedFields");
    if (saved) return JSON.parse(saved);
    return Object.keys(userDataSet);
  };
  const getInitialRecommendedFields = () => {
    const saved = localStorage.getItem("recommendedFields");
    if (saved) return JSON.parse(saved);
    return defaultRecommendedFields.filter(f => !Object.keys(userDataSet).includes(f));
  };

  const [recommendedFields, setRecommendedFields] = useState(getInitialRecommendedFields());
  const [selectedFields, setSelectedFields] = useState(getInitialSelectedFields());

  useEffect(() => {
    localStorage.setItem("selectedFields", JSON.stringify(selectedFields));
    localStorage.setItem("recommendedFields", JSON.stringify(recommendedFields));
  }, [selectedFields, recommendedFields]);

  useEffect(() => {
    setSelectedFields(getInitialSelectedFields());
    setRecommendedFields(getInitialRecommendedFields());
  }, [userDataSet]);

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
      <div className="bg-gray-100 p-6 flex flex-col gap-6">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Selected Fields :</h2>
        <div className="flex flex-wrap gap-4 w-full bg-[#11111169] pt-8 px-8 pb-4 rounded-xl min-h-44 space-y-4">
          {selectedFields.map((field, index) => {
            return (
              <div key={index} className="flex items-center bg-[#00000029] rounded-full pl-6 shadow mb-4 h-fit w-fit">
                <h2 className="text-xl font-semibold">{field[0].toUpperCase()+field.slice(1)}</h2>
                  <button
                  onClick={() => handleRemovedField(field, index)}
                  className="mb-1 mt-2 pr-3 px-1.5 h-9 w-9 cursor-pointer group"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-white transition-colors duration-300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff96"></path></g></svg>
                </button>
              </div>
            );
          })}
        </div>
        <h2 className="text:xl md:text-3xl font-bold mb-4">Recommended Fields :</h2>
        <div className="flex flex-wrap gap-4 w-full bg-[#11111169] pt-8 px-8 pb-4 rounded-xl min-h-44 space-y-4">
          {recommendedFields.map((field, index) => (
            <div key={index} className="flex items-center bg-[#00000029] rounded-full pl-6 shadow mb-4 h-fit w-fit">
              <h3 className="text-lg font-semibold">{field[0].toUpperCase()+field.slice(1)}</h3>
              <button
                onClick={() => handleAddedField(field, index)}
                className="mb-1 mt-2 pr-3 px-1.5 h-10 w-10 cursor-pointer group"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="group-hover:stroke-white transition-colors duration-300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#ffffff99" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#ffffff96" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/buildResume")}
          className="mt-4 px-6 py-3 bg-green-500 text-white rounded"
        >Next</button>
      </div>
    </>
  );
}

export default UserInteractionPage;
