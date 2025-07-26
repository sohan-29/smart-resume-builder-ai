import { useEffect, useState } from "react";

function ResumeForm({ setResumeData, userDataSet, setExportMode }) {
  const [formData, setFormData] = useState(userDataSet);
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setExportMode(Object.values(formData).every(value => value.trim() !== ""));
  }, [formData]);

  const fields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "title", label: "Title", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phoneNumber", label: "Phone Number", type: "tel", required: true },
    { name: "linkedIn", label: "LinkedIn", type: "url", required: true },
    { name: "github", label: "GitHub", type: "url", required: true },
    { name: "website", label: "Website", type: "url", required: true },
    { name: "summary", label: "Summary", type: "textarea", required: true },
    { name: "skills", label: "Skills", type: "textarea", required: true },
    { name: "experience", label: "Experience", type: "textarea", required: true },
    { name: "projects", label: "Projects", type: "textarea", required: true },
    { name: "education", label: "Education", type: "textarea", required: true },
    { name: "certifications", label: "Certifications", type: "textarea", required: true },
    { name: "awards", label: "Awards", type: "textarea", required: true },
    { name: "languages", label: "Languages", type: "textarea", required: true },
    { name: "volunteerExperience", label: "Volunteer Experience", type: "textarea", required: true },
    { name: "publications", label: "Publications", type: "textarea", required: true },
    { name: "interests", label: "Interests", type: "textarea", required: true },
    { name: "references", label: "References", type: "textarea", required: true },
  ];

  const validateField = (name, value) => {
    let error = "";
    if (fields.find(f => f.name === name)?.required && !value.trim()) {
      error = `${name} is required`;
    } else if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email address";
      }
    } else if (name === "phoneNumber" && value) {
      const phoneRegex = /^[0-9+\-\s()]*$/;
      if (!phoneRegex.test(value)) {
        error = "Invalid phone number";
      }
    } else if ((name === "linkedIn" || name === "github" || name === "website") && value) {
      try {
        new URL(value);
      } catch {
        error = "Invalid URL";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setResumeData(updated);
  };

  const getAISuggestion = async () => {
    if (!formData.summary || formData.summary.trim() === "") {
      setSuggestion("⚠️ Please enter a summary to get suggestions.");
      return;
    }
    setLoading(true);
    setSuggestion("");

    try {
      const res = await fetch("http://localhost:5000/suggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: formData.summary }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setSuggestion(`⚠️ Error: ${errorData.error || 'Failed to fetch suggestion'}`);
      } else {
        const data = await res.json();
        setSuggestion(data.suggestion);
      }
    } catch (err) {
      setSuggestion("⚠️ Failed to fetch suggestion");
    }

    setLoading(false);
  };

  return (
    <div className="w-full md:w-1/2 p-4 space-y-4">
      {Object.keys(formData).map((fieldName) => {
        const fieldDef = fields.find(f => f.name === fieldName);
        if (!fieldDef) return null;
        const { name, label, type, required } = fieldDef;
        return (
          <div key={name}>
            <label className="block font-semibold capitalize" htmlFor={name}>
              {label}{required && <span className="text-red-600">*</span>}
            </label>
            {type === "textarea" ? (
              <textarea
                id={name}
                name={name}
                rows={name === "summary" ? 4 : 2}
                className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : ""}`}
                value={formData[name] || ""}
                onChange={handleChange}
              />
            ) : (
              <input
                id={name}
                name={name}
                type={type}
                className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : ""}`}
                value={formData[name] || ""}
                onChange={handleChange}
              />
            )}
            {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
            {name === "summary" && (
              <>
                <button
                  onClick={getAISuggestion}
                  type="button"
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
                >
                  {loading ? "Thinking..." : "Get AI Suggestion"}
                </button>

                {suggestion && (
                  <p className="mt-2 text-sm bg-gray-100 p-2 rounded border">
                    <strong>Suggestion:</strong> {suggestion}
                  </p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ResumeForm;
