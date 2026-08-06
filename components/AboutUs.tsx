import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="bg3.png" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-3xl mx-4">
        <h1 className="text-3xl font-bold mb-2 text-red-400">About Discover</h1>
        <p className="text-md italic text-gray-600 mb-4">“Discover more around you.”</p>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-red-500">Discover</span> — your smart, seamless solution for finding local businesses, services, and essential spots around you. Whether you're hunting for the best cafes, nearby hospitals, trusted banks, or popular restaurants, Discover brings it all to your fingertips.
        </p>
        <p className="text-gray-700 mb-4">
          Our intuitive search bar lets you explore any location or category instantly. Get real-time listings complete with ratings, directions, and business details — all beautifully displayed alongside an interactive map. With one click, you can jump directly to Google Maps for step-by-step directions.
        </p>
        <p className="text-gray-700">
          At <span className="font-semibold text-red-500">Discover</span>, our mission is to simplify your local exploration, support local businesses, and deliver accurate, up-to-date listings that make your journey easier and smarter every day.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
