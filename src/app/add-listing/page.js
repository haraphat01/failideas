"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { firestore } from '../lib/firebase'; // Assume Firebase is initialized in lib/firebase.js

export default function AddListing() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [category, setCategory] = useState('');
    const [failureReason, setfailureReason] = useState('');
    const [projectAssets, setProjectAssets] = useState('');
    const [techStack, setTechStack] = useState('');
    const [users, setUsers] = useState('');
    const [fundingRaised, setFundingRaised] = useState('');
    const [stage, setStage] = useState('');
    const [revenueModel, setRevenueModel] = useState('');
    const [tags, setTags] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || !price) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            // Add listing to Firestore
            await firestore.collection('listings').add({
                title,
                description,
                price,
                createdAt: new Date(),
            });
            setSuccess('Your listing has been added successfully!');
            setError('');
            // Redirect to listings page after 2 seconds
            setTimeout(() => {
                router.push('/listings');
            }, 2000);
        } catch (error) {
            setError('An error occurred. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6">
            <h1 className="text-4xl font-bold mb-6">Add a Failed Project</h1>

            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Project Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="e.g., Abandoned SaaS Platform"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Project Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="e.g., This SaaS platform was created to..."
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Price ($)
                    </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="e.g., 500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="SaaS">SaaS</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Hardware">Hardware</option>
                        {/* Add more categories */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Reason for Failure</label>
                    <textarea
                        value={failureReason}
                        onChange={(e) => setfailureReason(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Why did this project fail?"
                    />
                </div>
                <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Project Assets</label>
  <input
    type="file"
    value={projectAssets}
    multiple
    onChange={(e) => setProjectAssets(e.target.files)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
  />
</div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
  <input
    type="text"
    value={techStack}
    onChange={(e) => setTechStack(e.target.value)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    placeholder="e.g., React, Node.js, MongoDB"
  />
</div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Number of Users/Customers</label>
  <input
    type="number"
    value={users}
    onChange={(e) => setUsers(e.target.value)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    placeholder="e.g., 1000"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Funding Raised (if any)</label>
  <input
    type="number"
    value={fundingRaised}
    onChange={(e) => setFundingRaised(e.target.value)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    placeholder="e.g., 50000"
  />
</div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Stage of Completion</label>
  <select
    value={stage}
    onChange={(e) => setStage(e.target.value)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
  >
    <option value="MVP">MVP</option>
    <option value="Prototype">Prototype</option>
    <option value="Production Ready">Production Ready</option>
    <option value="Shut Down">Shut Down</option>
  </select>
</div>
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Revenue Model</label>
  <input
    type="text"
    value={revenueModel}
    onChange={(e) => setRevenueModel(e.target.value)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    placeholder="e.g., Subscription, Ads"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">Tags/Keywords</label>
  <input
    type="text"
    value={tags}
    onChange={(e) => setTags(e.target.value)}
    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
    placeholder="e.g., AI, SaaS, Blockchain"
  />
</div>



                {/* Error or Success Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md"
                >
                    Submit Listing
                </button>
            </form>
        </div>
    );
}
