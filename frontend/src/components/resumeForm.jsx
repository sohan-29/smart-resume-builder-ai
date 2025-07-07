import { useState } from "react";

function ResumeForm({ onChange }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    onChange(updated);
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
