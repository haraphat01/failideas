"use client"
import React, { useState } from 'react';
import ContactForm from "@/components/ContactForm";

const ContactFormButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {isOpen ? (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <ContactForm />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us
        </button>
      )}
    </div>
  );
};

export default ContactFormButton;