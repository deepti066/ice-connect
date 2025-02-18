import React from "react";

const OttBundle = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white text-center p-4 text-2xl font-bold">
        OTT Bundle Subscription
      </header>
      <main className="flex flex-col items-center mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Unlimited Streaming, One Subscription</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        We bring in the feasibility to make sure that the popular rotator subscription is provided to people such that the enhancement towards the subscriptions which are based on several entertainment purposes can therefore be streamed accordingly. The probability of internet that is associated with the audit subscription will bring about the segmentation of several platforms where people can enjoy the videos and the internet services that are encroached over the primary platforms. This makes it easier in order to enjoy the prominence of various services in just a single stream of evaluation.
        </p>
        <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700">
          Subscribe Now
        </button>
      </main>
      {/* <section className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">OTT Basic</h2>
          <p className="mt-2 text-gray-600">Access to 5 Streaming Services</p>
          <p className="mt-2 font-semibold text-gray-800">$10/month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-purple-600">
          <h2 className="text-xl font-bold text-purple-600">OTT Premium</h2>
          <p className="mt-2 text-gray-600">Access to 10 Streaming Services</p>
          <p className="mt-2 font-semibold text-gray-800">$20/month</p>
        </div>
      </section> */}
      <footer className="mt-16 text-gray-600 text-center">
        &copy; 2025 OTT Bundle. All rights reserved.
      </footer>
    </div>
  );
};

export default OttBundle;