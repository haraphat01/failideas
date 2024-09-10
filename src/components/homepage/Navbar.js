// components/Navbar.js
"use client"
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../../lib/firebase";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png"
const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user authentication state
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // Google Sign-In function
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // Google Sign-Out function
  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold">
        <div className="flex">
        <Image src={logo} alt='failideas logo' width={50} height={50} className="mx-auto" />
          FailedIdeas.com
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/add-listing" className="hover:underline">
            Add Listing
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="rounded-full w-8 h-8"
              />
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
      </div>
    </nav>
  );
};

export default Navbar;
