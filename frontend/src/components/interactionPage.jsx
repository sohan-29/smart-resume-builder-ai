import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
const UserInteractionPage = ({ userDataSet, setUserDataSet }) => {
  const navigate = useNavigate();
  const [recommendedFields, setRecommendedFields] = useState([
    "projects",
    "certifications",
    "experience",
    "languages",
    "volunteerExperience",
    "awards",
    "publications",
    "interests",
    "references",
  ]);
  const [selectedFields, setSelectedFields] = useState(Object.keys(userDataSet));

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
        <h2 className="text-xl font-semibold mb-4">Selected Fields</h2>
        <div className="flex flex-wrap w-full p-4 space-y-4">
          {selectedFields.map((field, index) => {
            return (
              <div key={index} className="p-4 bg-white rounded shadow mb-4 w-fit">
                <h2 className="text-xl font-semibold">{field}</h2>
                <button
                  onClick={() => handleRemovedField(field, index)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <h2 className="text-xl font-semibold mb-4">Recommended Fields</h2>
        <div className="flex flex-wrap w-full p-4 space-y-4">
          {recommendedFields.map((field, index) => (
            <div key={index} className="p-4 bg-white rounded shadow mb-4">
              <h3 className="text-lg font-semibold">{field}</h3>
              <button
                onClick={() => handleAddedField(field, index)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add
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
