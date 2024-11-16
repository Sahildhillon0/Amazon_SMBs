// src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/Logo.jpeg";
import { auth } from "../userProfile/services/firebase";
import { signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

import { db } from "../userProfile/services/firebase"; // Firestore instance

export default function Navbar() {

  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState("Home");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            // Set the user data
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

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  const handleLogin = () => {
    console.log("Navigate to login page or show login modal");
    navigate("/login");

  };
  const handleRegister = () => {
    console.log("Navigate to login page or show login modal");
    navigate("/register");

  };

  if (loading) {
    return (
      <div className="w-full h-[10vh] border-b-2 flex items-center justify-center">
        <p>Loading...</p> {/* Show loading text or spinner */}
      </div>
    );
  }

  return (
    <div className="w-full h-[10vh] border-b-2">
      <div className="flex h-full justify-between">
        <div>
          <img src={Logo} alt="Logo" className="h-[100%]" />
        </div>
        <div>
          <ul className="flex h-full items-center">
            {["Home", "Services", "About Us", "Contact Us", "Chat"].map(
              (page) => (
                <li
                  key={page}
                  className={`mx-5 h-full font-bold cursor-pointer transition-all text-center duration-300 flex items-center ${selectedPage === page ? "border-b-4 border-yellow-500" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  <Link to={`/${page.replace(/\s+/g, '').toLowerCase()}`} className="w-full h-full flex items-center justify-center">
                    {page}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <p className="text-center h-full flex items-center p-3">{user.username || user.email}</p>
              <button onClick={handleLogout} className="bg-black text-white p-4 h-full">
                Logout
              </button>
            </>
          ) : (
            <>
              <p onClick={handleLogin} className="text-center h-full flex items-center p-3 cursor-pointer">
                Log in
              </p>
              <button onClick={handleRegister} className="bg-black text-white px-2 h-full rounded-none">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
