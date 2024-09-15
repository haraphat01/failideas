"use client";
import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../../lib/firebase'; // Adjust this import path as needed

const db = getFirestore(app);
const auth = getAuth(app);

export default function AddListing() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [keyFeatures,  setKeyFeatures] = useState("");
  const [projectStage, setProjectStage] = useState("");
  const [techStack,  setTechStack] = useState("");
  const [targetAudience,  setTargetAudience] = useState("");
  const [challenges,  setChallenges] = useState("");
  const [futurePlans,  setFuturePlans] = useState("");
  const [reasonForAbandonment,  setReasonForAbandonment] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !price || !category || !contactInfo) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "listings"), {
        title,
        description,
        price,
        category,
        contactInfo,
        projectStage,
        techStack, // Include techStack
        targetAudience, // Include targetAudience
        challenges, // Include challenges
        futurePlans, // Include futurePlans
        reasonForAbandonment, // Include reasonForAbandonment
        status: "inreview",
        createdAt: new Date(),
        userId: user.uid,
      });
      setShowModal(true);
      // Reset form fields
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setContactInfo("");
      setProjectStage("");
      setTechStack(""); // Reset techStack
      setTargetAudience(""); // Reset targetAudience
      setChallenges(""); // Reset challenges
      setFuturePlans(""); // Reset futurePlans
      setReasonForAbandonment(""); // Reset reasonForAbandonment
      setError("");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const Modal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Listing Submitted</h2>
            <p>Your listing has been successfully submitted.</p>
            <button
                onClick={() => {
                    onClose();
                    window.location.href = '/listings'; // Redirect to listings page
                }}
                className="mt-4 bg-black text-white px-4 py-2 rounded-md"
            >
                Ok
            </button>
        </div>
    </div>
);

  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-white text-black rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Add Your Failed Project
      </h1>

      {user ? (
       <form onSubmit={handleSubmit} className="space-y-6">
       <div>
         <label className="block text-lg font-semibold text-gray-800">Project Title</label> 
         <input
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
           placeholder="e.g., Abandoned SaaS Platform"
         />
       </div>
     
       <div>
         <label className="block text-lg font-semibold text-gray-800">Project Description</label>
         <textarea
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
           placeholder="e.g., This SaaS platform was created to..."
         />
       </div>
     
       <div>
         <label className="block text-lg font-semibold text-gray-800">Project Category</label> 
         <select
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
         >
           <option value="">Select a Category</option>
           <option value="Software">Software</option>
           <option value="Product">Product</option>
           <option value="Service">Service</option>
           <option value="Other">Other</option>
         </select>
       </div>
     
       <div>
         <label className="block text-lg font-semibold text-gray-800">Price ($)</label> 
         <input
           type="number"
           value={price}
           onChange={(e) => setPrice(e.target.value)}
           className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" // Increased padding for input
           placeholder="e.g., 500"
         />
       </div>
     
       <div>
         <label className="block text-lg font-semibold text-gray-800">Contact Information</label> 
         <input
           type="text"
           value={contactInfo}
           onChange={(e) => setContactInfo(e.target.value)}
           className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" // Increased padding for input
           placeholder="Your email or phone number"
         />
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Project Stage</label>
         <select
           value={projectStage}
           onChange={(e) => setProjectStage(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
         >
           <option value="">Select Stage</option>
           <option value="Idea">Idea</option>
           <option value="MVP">Minimum Viable Product (MVP)</option>
           <option value="In Market">In Market</option>
         </select>
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Key Features</label>
         <textarea
           value={keyFeatures}
           onChange={(e) => setKeyFeatures(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           placeholder="List the key features of the project"
         />
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Technology Stack</label>
         <input
           type="text"
           value={techStack}
           onChange={(e) => setTechStack(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           placeholder="e.g., React, Node.js"
         />
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Target Audience</label>
         <input
           type="text"
           value={targetAudience}
           onChange={(e) => setTargetAudience(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           placeholder="Who is the project aimed at?"
         />
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Challenges Faced</label>
         <textarea
           value={challenges}
           onChange={(e) => setChallenges(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           placeholder="Describe any challenges faced"
         />
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Future Plans</label>
         <textarea
           value={futurePlans}
           onChange={(e) => setFuturePlans(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           placeholder="Any future plans or features"
         />
       </div>
     
       <div>
       <label className="block text-lg font-semibold text-gray-800">Reason for Abandonment</label>
         <textarea
           value={reasonForAbandonment}
           onChange={(e) => setReasonForAbandonment(e.target.value)}
           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           placeholder="Why was the project abandoned?"
         />
       </div>
     
       {error && <p className="text-red-500 text-sm">{error}</p>}
     
       <button
    type="submit"
    className="w-full bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition-all"
>
    Submit Listing
</button>
     </form>
     
      ) : (
        <div className="text-center">
          <p className="mb-4">You must be logged in to add a listing.</p>
          <button
    onClick={handleGoogleSignIn}
    className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition-all flex items-center justify-center mx-auto"
>
<svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
              />
            </svg>
            Sign In with Google
          </button>
        </div>
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}