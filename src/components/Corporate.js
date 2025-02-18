import React from "react";

const Corporate = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white text-center p-4 text-2xl font-bold">
        Corporate Internet Services
      </header>
      <main className="flex flex-col items-center mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Reliable & Dedicated FTTO Internet</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        High-speed orientation of different services that is internet access can therefore be made possible with the 
        corporate internet services that we make people get enhanced with. The proactive network that is brought forth with respect 
        to the 24 by 7 analysis and the fiber connectivity that is redundant in terms of dealing with the guaranteed symmetrical high-speed Internet access is provided. 
        Corporate sector can now run their operations in a feasible manner with the prominent internet services that we offer. 
        Dedicated business can therefore install the better possible means of internet access which we provide in order to make sure that there is no interaction 
        in terms of work analysis.
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

export default Corporate;
