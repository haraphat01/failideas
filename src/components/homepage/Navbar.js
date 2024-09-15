"use client"
import { useState, useEffect } from "react";
import { auth, googleProvider, signInWithPopup, firebaseSignOut } from "../../lib/firebase";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile menu icons

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    // Check for user authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image src={logo} alt="failideas logo" width={50} height={50} className="mr-2" />
          FailedIdeas.com
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/add-listing" className="hover:underline">Add Listing</Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <span>{user.displayName}</span>
              <button
                onClick={signOut}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
            >
              Sign In with Google
            </button>
          )}
        </div>

        {/* Mobile Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link href="/add-listing" className="hover:underline" onClick={toggleMobileMenu}>Add Listing</Link>

            {user ? (
              <div className="flex flex-col space-y-2">
                <span>{user.displayName}</span>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
              >
                Sign In with Google
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
