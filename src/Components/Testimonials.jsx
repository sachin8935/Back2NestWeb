import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Parent, Class 5 student",
      content: "Back2Nest gives me complete peace of mind. Live tracking is amazing!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face",
      location: "Boring Road, Patna"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Father of 2 kids",
      content: "Professional drivers and punctual service. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Kankarbagh, Patna"
    },
    {
      id: 3,
      name: "Anita Singh", 
      role: "Working mother",
      content: "Safe, reliable, and affordable. My daughter loves her daily ride!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "Danapur, Patna"
    },
    {
      id: 4,
      name: "Vikash Gupta",
      role: "Parent, Twin kids",
      content: "Emergency support is excellent. True 100% safety guarantee!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Patliputra, Patna"
    },
    {
      id: 5,
      name: "Sunita Devi",
      role: "Single mother",
      content: "Camera access feature is incredible. I can see my child anytime!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      location: "Fraser Road, Patna"
    },
    {
      id: 6,
      name: "Manish Thakur",
      role: "IT Professional",
      content: "App notifications keep me updated. Technology at its best!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      location: "Rajendra Nagar, Patna"
    },
    {
      id: 7,
      name: "Rekha Jha",
      role: "Teacher & Parent",
      content: "As an educator, I trust Back2Nest completely for student safety.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      location: "Bailey Road, Patna"
    },
    {
      id: 8,
      name: "Arun Singh",
      role: "Business Owner",
      content: "Lowest pricing without compromising on quality. Perfect service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      location: "Ashok Rajpath, Patna"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from families who trust Back2Nest for their children's daily school commute in Patna
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.8/5</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-gray-600">
              <span className="font-semibold text-blue-600">1,250+</span> Happy Families
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article
                key={`testimonial-${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Rating */}
                <div className="flex items-center mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <div className="flex mr-2">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <StarIcon key={starIndex} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed" itemProp="reviewBody">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Back2Nest customer`}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                    itemProp="image"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900" itemProp="name">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600" itemProp="jobTitle">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* ✅ Fixed: Use supported type "LocalBusiness" instead of "Service" */}
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness" hidden>
                  <meta itemProp="name" content="Back2Nest School Van Service" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join these happy families and experience safe school transportation
          </p>
          <button 
            onClick={() => navigate('/Students')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            aria-label="Navigate to student booking page"
          >
            Go to School
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
