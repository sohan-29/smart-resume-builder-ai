import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const featuresData = {
    features: [
        {
            title: "🎯 Custom Field Selection",
            desc: "Pick only the fields you need — education, experience, skills, and more."
        },
        {
            title: "🧠 AI Summary Suggestions",
            desc: "Get instant enhancements for your resume summary with one click."
        },
        {
            title: "🖥️ Live Resume Preview",
            desc: "See real-time changes as you edit your content."
        },
        {
            title: "📥 PDF Export",
            desc: "Download your finished resume as a clean, professional PDF."
        }
    ]
};

const aboutData = {
    about: "Smart Resume Builder AI is a web application that helps users create professional resumes with ease. It offers features like custom field selection, AI-powered suggestions, and live previews. The application is designed to be user-friendly and efficient, allowing users to focus on their content rather than formatting. Whether you're a student, a professional, or someone looking to update their resume, this tool provides the necessary features to create a standout resume quickly. Our mission is to empower job seekers with the tools they need to present their skills and experiences effectively. Our goal is to simplify the resume-building process and help users stand out in the job market."
};

const introData = {
    title: "Build Your Professional Resume Effortlessly",
    intro: "Create a standout resume with our easy-to-use builder. Customize your details, preview your resume, and get ready to download."
};

app.get("/", (req, res) => {
    res.send("Welcome to the Smart Resume Builder AI API");
});

app.get("/features", (req, res) => {
    res.json(featuresData);
});

app.get("/about", (req, res) => {
    res.json(aboutData);
});

app.get("/intro", (req, res) => {
    res.json(introData);
});

export default app;
