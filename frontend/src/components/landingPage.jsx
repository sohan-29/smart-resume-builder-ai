import Footer from "./footer";
import Header from "./header";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />

      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">Build Your Professional Resume Effortlessly</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Create a standout resume with our easy - to - use builder.Customize your details, preview your resume, and get ready to download
        </p>
        <a href="/customizeResume" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </a>
      </section>

      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="🎯 Custom Field Selection" desc="Pick only the fields you need — education, experience, skills, and more." />
          <FeatureCard title="🧠 AI Summary Suggestions" desc="Get instant enhancements for your resume summary with one click." />
          <FeatureCard title="🖥️ Live Resume Preview" desc="See real-time changes as you edit your content." />
          <FeatureCard title="📥 PDF Export" desc="Download your finished resume as a clean, professional PDF." />
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
