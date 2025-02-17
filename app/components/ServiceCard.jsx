import React from "react";
// import { Star } from "lucide-react";

export const ServiceCard = ({ name, image, services, rating, reviews, contact }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <div className="flex items-center mt-2">
        {/* {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          />
        ))} */}
        <span className="ml-2 text-sm text-gray-600">
          ({reviews} reviews)
        </span>
        <span className="ml-2 text-sm text-gray-600">
          ({contact} contacts)
        </span>
      </div>
      <div className="mt-3">
        <p className="text-sm text-gray-600">Services:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {services.map((service, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
