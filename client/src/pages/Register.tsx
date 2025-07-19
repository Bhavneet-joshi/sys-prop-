import React, { useState } from 'react';
import { Link } from 'wouter';

const steps = [
  { label: 'Account Info' },
  { label: 'Personal Details' },
  { label: 'Confirmation' },
];

const Register: React.FC = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    pan: '',
    aadhaar: '',
    contact: '',
    address: '',
  });
  const [message, setMessage] = useState('');

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Registration complete!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Create your account</p>
        </div>
        <div className="flex justify-center mb-4">
          {steps.map((s, i) => (
            <div key={s.label} className={`flex items-center ${i < steps.length - 1 ? 'mr-4' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${i === step ? 'bg-blue-700 text-white' : 'bg-gray-300 text-gray-700'}`}>{i + 1}</div>
              {i < steps.length - 1 && <div className="w-8 h-1 bg-gray-300 mx-1" />}
            </div>
          ))}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 0 && (
            <>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" value={form.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" value={form.password} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input id="firstName" name="firstName" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="First Name" value={form.firstName} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input id="lastName" name="lastName" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="pan" className="sr-only">PAN</label>
                <input id="pan" name="pan" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="PAN Number" value={form.pan} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="aadhaar" className="sr-only">Aadhaar</label>
                <input id="aadhaar" name="aadhaar" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Aadhaar Number" value={form.aadhaar} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="contact" className="sr-only">Contact</label>
                <input id="contact" name="contact" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">Address</label>
                <textarea id="address" name="address" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Address" value={form.address} onChange={handleChange} />
              </div>
            </>
          )}
          {step === 2 && (
            <div className="text-center text-green-700 font-semibold py-8">
              Please review your details and submit to complete registration.
            </div>
          )}
          <div className="flex justify-between mt-4">
            <button type="button" onClick={prev} disabled={step === 0} className={`px-4 py-2 rounded ${step === 0 ? 'bg-gray-200 text-gray-400' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>Back</button>
            {step < steps.length - 1 ? (
              <button type="button" onClick={next} className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Next</button>
            ) : (
              <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Register</button>
            )}
          </div>
          <div className="text-sm text-center mt-2">
            <span>Already have an account? </span>
            <Link href="/login" className="text-blue-700 hover:underline">Login</Link>
          </div>
        </form>
        {message && <div className="text-center text-green-600 mt-4">{message}</div>}
      </div>
    </div>
  );
};

export default Register;
