"use client"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "We are very impressed with the quality of honey from Hanna Honey",
    author: "Ms. Lan",
    position: "Vietnam Distributor",
    company: "Hanoi Premium Foods"
  },
  {
    id: 2,
    quote: "The partnership with HANNA HONEY has exceeded our expectations. Their premium Australian honey is highly sought after by our customers.",
    author: "Mr. Chen Wei",
    position: "Regional Manager",
    company: "Singapore Gourmet Markets"
  },
  {
    id: 3,
    quote: "HANNA HONEY's commitment to quality and sustainability aligns perfectly with our brand values. A truly exceptional partnership.",
    author: "Sarah Mitchell",
    position: "Procurement Director",
    company: "Australian Organic Stores"
  }
];

const PartnerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            What Our Partners Say
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Hear from our valued partners around the world about their experience with HANNA HONEY
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 text-amber-300 w-8 h-8" />
            
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl text-amber-900 font-medium leading-relaxed mb-8 italic">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              
              {/* <div className="border-t border-amber-200 pt-6">
                <div className="font-bold text-amber-900 text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-amber-700 font-medium">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-amber-600 text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div> */}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-full p-2 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-amber-600' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;