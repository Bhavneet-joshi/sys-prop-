import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-2">HLSG Industries Pvt. Ltd.</p>
        <p className="text-gray-600">123 Industrial Avenue, Tech City, Country</p>
        <p className="text-gray-600">Phone: +1 234 567 8900</p>
        <p className="text-gray-600">Email: info@hlsgindustries.com</p>
      </div>
      <div className="w-full h-64 rounded-lg overflow-hidden shadow">
        <iframe
          title="HLSG Industries Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.419415684681!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f2b1b1b%3A0x123456789abcdef!2sTech%20City!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
