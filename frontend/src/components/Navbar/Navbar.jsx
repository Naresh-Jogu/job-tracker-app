import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { user, logoutUserFun } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUserFun();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
      <Link to="/dashboard" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">JT</span>
        </div>
        <span className="text-xl font-bold text-blue-600">Job Tracker</span>
      </Link>

      <div className="flex items-center gap-4">
        <span className="text-gray-500 text-sm">
          Hi, <span className="font-semibold text-gray-700">{user?.name}</span>
        </span>
        <Link
          to="/resume-analyzer"
          className="text-sm text-gray-600 hover:text-blue-600 transition-all"
        >
          AI Resume
        </Link>
        <button
          onClick={handleLogout}
          type="button"
          className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
