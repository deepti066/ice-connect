import React from "react";

const TV = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white text-center p-4 text-2xl font-bold">
      TV and streaming
      </header>
      <main className="flex flex-col items-center mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">TV & Streaming</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        one of the most prosperous and valuable things these days is to go for the features that are a part of the entertainment. In this, the streaming of movies as well as TV shows is ruling the entire globe. As a part of this that will have to be a reliable service that will help people to get into things and evaluate the best out of the lot which is present. The internet services will make it possible for all those entertainment enthusiasts to rely on the prominence of making sure that their connection is a demandable one that can help them to Foster concerning the streaming and TV shows. Flawless connectivity is brought forth concerning the internet services which are at your end.
        </p>
        <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700">
          Contact Us
        </button>
      </main>
      {/* <section className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Standard FTTO</h2>
          <p className="mt-2 text-gray-600">Dedicated fiber connection with 100 Mbps speed</p>
          <p className="mt-2 font-semibold text-gray-800">$150/month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-green-600">
          <h2 className="text-xl font-bold text-green-600">Enterprise FTTO</h2>
          <p className="mt-2 text-gray-600">Dedicated fiber connection with 1 Gbps speed</p>
          <p className="mt-2 font-semibold text-gray-800">$500/month</p>
        </div>
      </section> */}
      <footer className="mt-16 text-gray-600 text-center">
        &copy; 2025 Corporate Internet Services. All rights reserved.
      </footer>
    </div>
  );
};

export default TV;
