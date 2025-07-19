import React from 'react';

const Policy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Policies</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Privacy Policy</h2>
        <p className="text-gray-700 mb-4">We are committed to protecting your privacy. Read our full privacy policy for details on how we handle your data.</p>
        <a href="/docs/privacy-policy.pdf" download className="text-blue-700 underline hover:text-blue-900">Download Privacy Policy (PDF)</a>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Data Protection Policy</h2>
        <p className="text-gray-700 mb-4">Your data security is our priority. Learn more about our data protection practices in the document below.</p>
        <a href="/docs/data-protection-policy.pdf" download className="text-blue-700 underline hover:text-blue-900">Download Data Protection Policy (PDF)</a>
      </div>
    </div>
  );
};

export default Policy;
