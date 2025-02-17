"use client"

import { ServiceCard } from "../components/ServiceCard";
import { useEffect } from 'react';

const serviceProviders = [
    {
      name: "Window Cleaning Pro",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3",
      services: ["Window Cleaning", "Pressure Washing", "Gutter Cleaning"],
      rating: 4.8,
      reviews: 127,
      contact:+254720523299,
    },
    {
      name: "Sydney Electricians",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3",
      services: ["Electrical Repairs", "Installation", "Maintenance"],
      rating: 4.9,
      reviews: 89,
      contact:+254720523299,
    },
    {
      name: "Green Gardens",
      image:
        "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3",
      services: ["Landscaping", "Lawn Care", "Garden Maintenance"],
      rating: 4.7,
      reviews: 156,
      contact:+254720523299,
    },
    {
      name: "Masons",
      image:
        "https://images.pexels.com/photos/6611177/pexels-photo-6611177.jpeg?auto=compress&cs=tinysrgb&w=600",
      services: ["Masonry", "Cement mixing", "Roofing"],
      rating: 4.8,
      reviews: 127,
      contact:+254720523299,
    },
    {
      name: "Welders",
      image:
        "https://images.pexels.com/photos/20814731/pexels-photo-20814731/free-photo-of-man-standing-on-a-pile-of-metal-sheets-and-soldering.jpeg?auto=compress&cs=tinysrgb&w=600",
      services: ["Welding services", "Cold welding", "laser welding"],
      rating: 4.9,
      reviews: 89,
      contact:+254720523299,
    },
    {
      name: "Painters",
      image:
        "https://images.pexels.com/photos/5493653/pexels-photo-5493653.jpeg?auto=compress&cs=tinysrgb&w=600",
      services: ["Wall painting", "Sky scrapper painting", "Wall art"],
      rating: 4.7,
      reviews: 156,
      contact:+254720523299,
    },
  ];
  
const ServiceProviders = () => {
  useEffect(() => {
    const getServiceProviders = async () =>{
      const token = localStorage.getItem("accessToken");
      const ServiceProvidersUrl = "https://sydneyservices-production.up.railway.app/sydney/service-provider/";
  
      const response = await fetch(ServiceProvidersUrl,{
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();
  
      console.log(data);
    }
    
     getServiceProviders();

  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Available Service Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceProviders.map((provider, index) => (
              <ServiceCard key={index} {...provider} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default ServiceProviders