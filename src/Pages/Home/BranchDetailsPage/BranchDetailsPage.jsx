import React from 'react';

const BranchDetailsPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h2 className='text-center text-orange-400 text-4xl font-bold'>Our Shop Address</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            
            <div className="mt-4">
              <h2 className="text-xl text-gray-500 font-bold mb-2">Baridhara Branch</h2>
              <p className="text-gray-700">Baridhara, Gulshan Dhaka1212</p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg text-gray-500 font-bold mb-2">Opening Hours</h3>
              <ul className="text-gray-700">
                <li className="mb-2">
                  Monday-Friday: 9:00 AM - 6:00 PM
                </li>
                <li className="mb-2">
                  Saturday: 10:00 AM - 5:00 PM
                </li>
                <li className="mb-2">
                  Sunday: Closed
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg text-gray-500 font-bold mb-2">Contact Information</h3>
              <p className="text-gray-700">
                Phone: (123) 456-7890
              </p>
              <p className="text-gray-700">
                Email: info@toystore.com
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <iframe
              title="Branch Location"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.494153152147!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_LONGITUDE!3zYOUR_LATITUDE!5e0!3m2!1sen!2sus!4v1621519793492!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetailsPage;
