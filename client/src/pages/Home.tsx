import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-white">
      <div className="flex flex-col items-center mt-12">
        <img src="/logo192.png" alt="HLSG Logo" className="h-20 w-20 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
          At HLSG Industries, we don’t just envision the future—<br className="hidden md:block" />we build it.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
          Welcome to HLSG Industries, your trusted partner in industrial innovation and excellence. Explore our services, discover our story, and join us in building a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Home;
