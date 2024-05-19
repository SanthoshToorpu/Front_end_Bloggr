import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Newblog from './pages/Newblog';
import { useNavigate } from 'react-router-dom';
import Profile from './pages/Profile';
import { useEffect, useRef, useState } from 'react';
import UpdateProfile from './pages/Updateprofile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col gap-2">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path="/newblog" element={<Newblog />} />
          <Route path='/newuser' element={<UpdateProfile />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Header = () => {
  const navigate = useNavigate();
  const userid = localStorage.getItem("userid");

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(userid);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isAuthenticated = localStorage.getItem("jwt");

  return (
    <div className="border-b-2 py-4 mx-8 flex items-center justify-between gap-4">
      <Link to="/">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            </svg>
          </div>
          <div className="flex flex-col hidden md:block">
            <h1 className="text-3xl font-bold">Bloggr</h1>
            <p className="text-gray-500 dark:text-gray-400">A place to share my thoughts</p>
          </div>
        </div>
      </Link>
      {isAuthenticated && (
        <div className="flex items-center gap-2">
          <button
            className="border border-gray-950 px-8 py-2 mr-4 rounded-md hidden md:block"
            onClick={() => navigate("/newblog")}
          >
            New Blog
          </button>
          <div ref={menuRef} className="relative hidden md:flex items-center gap-2">
            <div className="relative h-8 w-8 cursor-pointer">
              <img
                src="/placeholder.svg"
                alt="Avatar"
                className="rounded-full object-cover"
                onClick={toggleMenu}
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400">@username</p>
            {isOpen && (
              <div className="flex flex-col absolute top-12 right-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-28 items-center">
                <Link to={`/profile/${userid}`} className="py-2 border-b">
                  Profile
                </Link>
                <button
                  className="py-2"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 dark:text-gray-400 border-gray-600 dark:border-gray-400"
            onClick={toggleMobileMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      )}
      {menuOpen && isAuthenticated && (
        <div className="absolute top-16 z-10 right-8 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 md:hidden">
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => {
              navigate("/newblog");
              setMenuOpen(false);
            }}
          >
            New Blog
          </button>
          <Link to={`/profile/${userid}`} className="py-2 border-b block px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            Profile
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </button>
          <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="relative h-8 w-8">
              <img
                src="/placeholder.svg"
                alt="Avatar"
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400">@username</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
