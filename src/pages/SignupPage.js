import React from 'react';
import Header from '../components/Header'; // Import the Header component

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* Include the Header component */}
      <main className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-4">
        <h2 className="text-2xl font-bold mb-4">Sign Up Page</h2>
        <p className="mb-4">Welcome to the sign-up page!</p>
        {/* Add sign-up form here */}
      </main>
    </div>
  );
};

export default SignupPage;
