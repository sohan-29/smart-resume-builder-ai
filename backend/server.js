const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/suggest", async (req, res) => {
  const { text } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Improve this resume line:\n"${text}"\n\nSuggestion:`,
        },
      ],
      max_tokens: 100,
    });
    res.json({ suggestion: response.choices[0].message.content.trim() });
  } catch (err) {
    console.error("OpenAI Error:", err.message);
    res.status(500).json({ error: "Failed to fetch suggestion from OpenAI" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
