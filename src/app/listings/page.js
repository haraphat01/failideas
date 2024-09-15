"use client";

import useSWR from 'swr';
import Link from 'next/link';
import { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListingsPage() {
  const { data: listings, error } = useSWR('/api/listings', fetcher);

  // States for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Filtered listings based on search and filters
  const filteredListings = listings
    ? listings.filter((listing) => {
        const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? listing.category === selectedCategory : true;
        const matchesPrice = maxPrice ? listing.price <= maxPrice : true;
        return matchesSearch && matchesCategory && matchesPrice;
      })
    : [];

  if (error) {
    return (
      <div className="max-w-5xl mx-auto my-10 p-8 bg-white text-black rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Approved Listings</h1>
        <p className="text-red-500 text-center">Failed to load listings: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10 p-8 bg-white text-black rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Approved Listings</h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {/* Add categories dynamically or statically */}
          <option value="Tech">Tech</option>
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
          {/* Add more categories as needed */}
        </select>

        {/* Price Filter */}
        <input
          type="number"
          placeholder="Max Price"
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings && filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div key={listing.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">{listing.title}</h2>
              <p className="mt-2 text-gray-600">{listing.description}</p>
              <p className="mt-2 text-gray-600">Price: ${listing.price}</p>
              <p className="mt-2 text-gray-600">Category: {listing.category}</p>
              <Link href={`/listings/${listing.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No listings available.</p>
        )}
      </div>
    </div>
  );
}
