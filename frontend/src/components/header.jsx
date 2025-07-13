import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-4 pb-3 shadow-md bg-white fixed top-0 z-50">
      <Link to={'/'} className="text-2xl ml-6 font-bold" >
      <img src="/icon.svg" alt="Logo" className="inline-block h-7 mr-2 mb-3" />
      ResumeBuilder.ai</Link>
    </header>
  );
};

export default Header;
