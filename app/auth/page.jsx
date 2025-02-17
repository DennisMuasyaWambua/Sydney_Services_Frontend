"use client"

import { useRouter } from 'next/router';
import { useState } from 'react';

const AuthPage = () => {
 
  const [loginData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegistrationData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    password: "",
  });
  const [activeTab, setActiveTab] = useState('signin');

  const handleLoginDataChange = (e) =>{
     const{name, value} = e.target;
     setFormData({...loginData,[name]:value});
  }

  const handleRegisterDataChange = (e) =>{
    const{name, value} = e.target;
    setRegistrationData({...registerData,[name]:value});
  }

  
  const handleLogin = async (e) => {
    e.preventDefault();
   

    try {
      // Use the Formspree endpoint from environment variables
      const FORM_ENDPOINT = "https://sydneyservices-production.up.railway.app/sydney/login/";

      if (!FORM_ENDPOINT) {
        throw new Error("Formspree endpoint is not set in the environment variables.");
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
       
        headers: {
        "Content-Type": "application/json",
        
        },
      
        body: JSON.stringify({
          ...loginData, // The email recipient
        }),
      });
      console.log(loginData);
      console.log(response.status);
      console.log(response.body);

      if (response.ok) {
        // setResponseMessage("You are logged in successfully!");
        const data = await response.json();
        console.log(data);  
        // console.log(data.access_token);
 
        localStorage.setItem('accessToken', data.access_token);
        console.log(localStorage.getItem('accessToken'));

        if(data.status ==true){
          window.location.href = '/service_providers';
        }
      } else {
        console.log("Failed to login");
        // setResponseMessage("Failed to log in. Please try again.");
      }
    } catch (error) {
      // setResponseMessage("An error occurred. Please try again later.");
      console.error("Formspree Error:", error);
    } finally {
      // setIsSubmitting(false);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    

    try {
      // Use the Formspree endpoint from environment variables
      const FORM_ENDPOINT = "https://sydneyservices-production.up.railway.app/sydney/register/";

      if (!FORM_ENDPOINT) {
        throw new Error("Formspree endpoint is not set in the environment variables.");
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
       
        headers: {
        "Content-Type": "application/json",
        
        },
      
        body: JSON.stringify({
          ...registerData, // The email recipient  
        }),
      });
      const data =  await response.json();


      console.log(response.body);

      if (response.ok) {
       console.log ("successfully registered");
  
       console.log(data);
       window.location.href = "/service_providers";
      } else {
        console.log(data)
        console.log("Failed to register");
        console.log(data);
      }
    } catch (error) {
     
      console.error(" Error:", error);
    } finally {
      
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-900">HOMESERVICE</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact Us'].map((item) => (
                <a key={item} href="#" className="text-gray-700 hover:text-blue-600">
                  {item}
                </a>
              ))}
             
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Container */}
      <div className="max-w-md mx-auto mt-12 px-4">
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Tabs */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab('signin')}
              className={`flex-1 py-4 text-center ${
                activeTab === 'signin'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'border-b-2 border-gray-200 text-gray-500'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-4 text-center ${
                activeTab === 'signup'
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'border-b-2 border-gray-200 text-gray-500'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          <div className="space-y-6">
            {activeTab === 'signin' ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <input
                    name = "email"
                    type="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={handleLoginDataChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleLoginDataChange}
                    placeholder="Password"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
                <div className="text-center text-sm">
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <input
                    name="name"
                    type="text"
                    value={registerData.name}
                    onChange={handleRegisterDataChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    required
                  />
                </div>
               
                <div>
                  <input
                    name="email"
                    type="email"
                    value={registerData.email}
                    onChange={handleRegisterDataChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    required
                  />
                </div>

                <div>
                  <input
                    name="mobile_number"
                    type="text"
                    value={registerData.mobile_number}
                    onChange={handleRegisterDataChange}
                    placeholder="+254..."
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    name="password"
                    type="password"
                    value={registerData.password}
                    onChange={handleRegisterDataChange}
                    placeholder="Create Password"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    required
                  />
                </div>
               
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create Account
                </button>
              </form>
            )}

            {activeTab === 'signup' && (
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => setActiveTab('signin')}
                  className="text-blue-600 hover:underline"
                >
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;