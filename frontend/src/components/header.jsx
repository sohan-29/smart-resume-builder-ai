import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Link to={'/'} className="text-2xl font-bold" >Smart Resume Builder AI</Link>
      <p className="text-sm">
        Create your professional resume with selected fields and AI assistance.
      </p>
    </header>
  );
};

export default Header;
