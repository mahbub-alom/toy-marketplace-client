import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-pink-100">
      <div className="py-8">
        <div className="my-12">
          <div className="text-center">
            <div className="w-full mx-auto md:w-1/2 p-4">
              <h2 className="text-5xl text-orange-500 font-bold mb-2">Our Mission</h2>
              <p className="text-gray-700 text-2xl">
                At barbie, we believe in nurturing children&apos;s imaginations and creating memorable experiences through play. We are dedicated to providing high-quality, safe, and engaging toys that inspire creativity and promote learning.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-700 text-2xl">Explore our website and find the perfect toys for your children. Let&apos;s make playtime unforgettable!</p>
          <Link to="/alltoys" className="btn btn-primary mt-4">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default About;