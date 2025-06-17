import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Account() {
  const [isSignUp, setIsSignUp] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Sign Up Data:", formData);
      alert("Account created (mock)!");
    } else {
      console.log("Log In Data:", formData);
      alert("Logged in (mock)!");
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-900">
          {isSignUp ? "Create Your Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-semibold text-blue-700"
              >
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-500" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Your username"
                  value={formData.username}
                  onChange={handleChange}
                  required={isSignUp}
                  className="w-full pl-10 border border-blue-300 rounded-md px-4 py-3 text-blue-900 placeholder-blue-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-blue-700"
            >
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-500" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 border border-blue-300 rounded-md px-4 py-3 text-blue-900 placeholder-blue-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-blue-700"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-500" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder={
                  isSignUp
                    ? "Enter a strong password"
                    : "Enter your password"
                }
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 border border-blue-300 rounded-md px-4 py-3 text-blue-900 placeholder-blue-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-3 rounded-md hover:bg-blue-900
              focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 transition"
          >
            {isSignUp ? "Create Account" : "Log In"}
          </button>
        </form>

        <p className="mt-6 text-center text-blue-700">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-900 font-semibold hover:underline focus:outline-none"
                type="button"
              >
                Log In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-900 font-semibold hover:underline focus:outline-none"
                type="button"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Account;
