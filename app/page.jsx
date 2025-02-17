import Image from 'next/image'
import Link from 'next/link'
import Nav from './sections/nav';
import Hero from './sections/hero';
import Aboutus from './sections/aboutus';

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Navigation Bar */}
    <Nav/>
    

    {/* Hero Section */}
    <Hero/>

    {/* Service Search Section */}
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        What service are you looking for today?
      </h2>
      <div className="flex items-center justify-center space-x-4">
        <span className="text-gray-600">Service Specific:</span>
        <input
          type="text"
          placeholder="Click Specific Service Here"
          className="border rounded-md px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* About Us Section */}
    <Aboutus/>
  </div>
  );
}
