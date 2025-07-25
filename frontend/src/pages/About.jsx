import React from 'react';
import aboutImg from "../assets/About-blog.avif"

const About = () => {
  return (
    <div className=" min-h-screen pt-28 px-4 md:px-0 mb-7 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl font-extrabold  mb-4">
            About Chris Dev
          </h1>
          <p className="text-lg ">
            A passionate developer's journey through code, technology, and innovation.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImg}
            alt="Blog Illustration"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
          <div>
            <p className=" text-lg mb-4">
              Welcome to Chris Dev! I'm a passionate software developer sharing my journey 
              through the ever-evolving world of technology. Here you'll find in-depth tutorials, 
              code reviews, tech insights, and real-world development experiences.
            </p>
            <p className=" text-lg mb-4">
              My mission is to make complex programming concepts accessible and share practical 
              knowledge that helps fellow developers grow. From web development frameworks to 
              emerging technologies, I explore it all with curiosity and enthusiasm.
            </p>
            <p className=" text-lg">
              Join me on this exciting journey as we build the future, one line of code at a time.
            </p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-gray-500">
            "Code is poetry written in logic. Let's create something beautiful."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
