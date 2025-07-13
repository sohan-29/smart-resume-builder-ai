import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import apis from "./apis.js";

dotenv.config();

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

const app = express();
app.use(cors());
app.use(express.json());

// Use the routes from apis.js
app.use("/", apis);

app.post("/suggest", async (req, res) => {
  const { text } = req.body;

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  try {
    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role:"system", content: "You are a helpful assistant." },
          { role:"user", content: `Improve this resume line: "${text}"` }
        ],
        temperature: 1.0,
        top_p: 1.0,
        model: model
      }
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }
    console.log("GitHub GPT-4 API Response:", response.body);
    const suggestion = response.body.choices[0].message.content;
    res.json({ suggestion });
  } catch (err) {
    console.error("GitHub GPT-4 API Error:", err);
    res.status(500).json({ error: "Failed to fetch suggestion from GitHub GPT-4 API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

