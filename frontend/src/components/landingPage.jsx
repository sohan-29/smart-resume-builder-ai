import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import axios from "axios";

const LandingPage = () => {
const [features, setFeatures] = useState([]);
const [intro, setIntro] = useState([]);

const fetchFeatures = async () => {
  try {
    const response = await axios.get('http://localhost:5000/features');
    setFeatures(response.data.features);
  } catch (error) {
    console.error("Error fetching features:", error);
  }
};

const fetchIntroduction = async () => {
  try {
    const response = await axios.get('http://localhost:5000/intro');
    setIntro(response.data);
  }
  catch (error) {
    console.error("Error fetching about information:", error);
  }
};

useEffect(() => {
  fetchFeatures();
  fetchIntroduction();
}, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-300 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">{intro?.title}</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">{intro?.intro}</p>
        <a href="/customizeResume" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </a>
      </section>

      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} desc={feature.desc} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{desc}</p>
  </div>
);

export default LandingPage;
