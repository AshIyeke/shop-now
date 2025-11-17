import React from 'react';
import { Users, Target, BookOpen, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About ShopHub
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your one-stop shop for the latest and greatest in technology.
          </p>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2023, ShopHub started with a simple idea: to make cutting-edge technology accessible to everyone. We noticed a gap in the market for a tech store that not only offered the best products but also provided exceptional customer service and a seamless shopping experience.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                From a small garage to a thriving online marketplace, our journey has been driven by a passion for innovation and a commitment to our customers. We believe that technology should empower and inspire, and we're here to help you find the perfect gadgets to enhance your life.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Our Team"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Mission & Values</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Target size={24} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                To curate and provide the best tech products, making them accessible and affordable for everyone, while delivering an outstanding customer experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <BookOpen size={24} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                We are constantly searching for the latest trends and innovations in technology to bring you the most exciting products on the market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Heart size={24} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">Customer First</h3>
              <p className="mt-2 text-base text-gray-500">
                Your satisfaction is our top priority. We are dedicated to providing excellent support and ensuring a smooth shopping journey from start to finish.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
            <p className="mt-4 text-lg text-gray-600">
                We are a passionate group of tech enthusiasts, designers, and customer service professionals dedicated to bringing you the best.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
                <div className="text-center">
                    <img className="mx-auto h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" alt="Team member 1" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Jane Doe</h3>
                    <p className="text-blue-600">Founder & CEO</p>
                </div>
                <div className="text-center">
                    <img className="mx-auto h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fDE?w=100" alt="Team member 2" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">John Smith</h3>
                    <p className="text-blue-600">Head of Product</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
