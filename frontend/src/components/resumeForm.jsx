import { useState } from "react";

function ResumeForm({ setResumeData, userDataSet }) {
  //add an interaction like the user able to add or remove sections dynamically by selecting the fields they want to include in the resume
  const [formData, setFormData] = useState(userDataSet);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setResumeData(updated);
  };

  return (
    <div className="w-full md:w-1/2 p-4 space-y-4">
      {Object.keys(formData).map((field) => (
        <div key={field}>
          <label className="block font-semibold capitalize">{field}</label>
          <textarea
            rows={field === "summary" ? 4 : 2}
            className="w-full p-2 border rounded"
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default ResumeForm;
