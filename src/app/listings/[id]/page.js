"use client";

import useSWR from 'swr';
import Link from 'next/link';

export default function ListingDetailPage({ params }) {
  const { id } = params;

  const { data: listing, error } = useSWR(`/api/listings/${id}`, async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });

  if (error) {
    return (
      <div className="max-w-5xl mx-auto my-10 p-8 bg-white text-black rounded-lg shadow-lg">
        <p className="text-red-500 text-center">Failed to load listing: {error.message}</p>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="max-w-5xl mx-auto my-10 p-8 bg-white text-black rounded-lg shadow-lg">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-white text-black rounded-lg shadow-lg">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">{listing.title}</h1>
        <p className="text-lg mb-4 text-gray-700">{listing.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Price</p>
            <p className="text-gray-700">${listing.price}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Category</p>
            <p className="text-gray-700">{listing.category}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Project Stage</p>
            <p className="text-gray-700">{listing.projectStage}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Key Features</p>
            <p className="text-gray-700">{listing.keyFeatures}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Technology Stack</p>
            <p className="text-gray-700">{listing.techStack}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Target Audience</p>
            <p className="text-gray-700">{listing.targetAudience}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Challenges Faced</p>
            <p className="text-gray-700">{listing.challenges}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Future Plans</p>
            <p className="text-gray-700">{listing.futurePlans}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">Reason for Abandonment</p>
            <p className="text-gray-700">{listing.reasonForAbandonment}</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <Link href="/listings" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        
            &larr; Back to Listings
        
        </Link>
      </div>
    </div>
  );
}
