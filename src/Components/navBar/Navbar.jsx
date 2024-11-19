import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Logo from "./assets/Logo.jpeg";
import { auth, db } from "../userProfile/services/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const Navbar = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("Home");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUser({ ...currentUser, ...userDoc.data() });
          }
        } catch (error) {
          console.error("Error fetching user data from Firestore:", error.message);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const handlePageChange = (page) => setSelectedPage(page);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  if (loading) {
    return (
      <div className="w-full h-[10vh] border-b-2 flex items-center justify-center">
        <p>Loading...</p> {/* Show loading message */}
      </div>
    );
  }

  return (
    <div className="w-full h-[10vh] border-b-2">
      <div className="flex h-full justify-between ">
        <img src={Logo} alt="Logo" className="h-[100%]" />

        <div className="hidden sm:block">
          <ul className="flex h-full items-center">
            {["Home", "Services", "About Us", "Contact Us", "Chat", "List"].map((page) => (
              <li
                key={page}
                className={`mx-5 h-full font-bold cursor-pointer transition-all text-center duration-300 flex items-center ${
                  selectedPage === page ? "border-b-4 border-yellow-500" : ""
                }`}
                onClick={() => handlePageChange(page)}>
                <Link
                  to={`/${page.replace(/\s+/g, "").toLowerCase()}`}
                  className="w-full h-full flex items-center justify-center">
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center ">
          {user ? (
            <>
              <p className="text-center h-full flex items-center p-3">
                {user.username || user.email}
              </p>
              <button onClick={handleLogout} className="bg-black text-white p-4 h-full">
                Logout
              </button>
            </>
          ) : (
            <>
              <p
                onClick={handleLogin}
                className="hidden sm:block text-center h-full  pt-6 p-3 cursor-pointer">
                Log in
              </p>
              <button
                onClick={handleRegister}
                className="bg-black text-white px-2 h-full rounded-none hidden sm:block">
                Register
              </button>
            </>
          )}
        </div>

        <button
          className=" text-xl sm:hidden h-full text-black bg-white "
          onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div className="w-64 bg-white h-full shadow-lg z-50 p-6">
           {/*  <button className="text-black text-2xl absolute top-4 right-4" onClick={toggleSidebar}>
              &times;
            </button> */}
            <nav className="mt-10 space-y-4">
              {["Home", "Services", "About Us", "Contact Us", "Chat", "List"].map((page) => (
                <Link
                  key={page}
                  to={`/${page.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => handlePageChange(page)}
                  className="block text-lg font-semibold text-gray-800 hover:text-yellow-500 transition">
                  {page}
                </Link>
              ))}
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setSidebarOpen(false)}
                    className="block text-lg font-semibold text-gray-800 hover:text-yellow-500 transition">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setSidebarOpen(false)}
                    className="block text-lg font-semibold text-gray-800 hover:text-yellow-500 transition">
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block text-lg font-semibold text-gray-800 hover:text-yellow-500 transition">
                  Logout
                </button>
              )}
            </nav>
          </div>
          {/* Click outside sidebar to close */}
          <div className="flex-grow" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </div>
  );
});

export default Navbar;
