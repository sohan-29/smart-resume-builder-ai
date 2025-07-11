import { useState } from "react";

function ResumeForm({ setResumeData, userDataSet }) {
  const [formData, setFormData] = useState(userDataSet);
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setResumeData(updated);
  };

  const getAISuggestion = async () => {
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

      const data = await res.json();
      setSuggestion(data.suggestion);
    } catch (err) {
      setSuggestion("⚠️ Failed to fetch suggestion");
    }

    setLoading(false);
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
          {field === "summary" && (
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
      ))}
    </div>
  );
}

export default ResumeForm;
