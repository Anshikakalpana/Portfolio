

"use client";
import React, { useState } from "react";
import { SiRedis } from "react-icons/si";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [result, setResult] = useState("");

  const onSubmit = async (e:any) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", "e8e92d6f-a090-4bc6-9a70-ab084dc42387");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10  text-black">
      <h1 className="py-2 text-2xl font-medium tracking-wide">Connect With Me</h1>
      <h2 className="text-4xl font-bold text-[#2899B4] mb-8">Get In Touch</h2>

    
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        
          <a href="https://www.linkedin.com/in/anshika-jain-5243b5260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          className="w-10 h-10 hover:scale-110 transition-transform duration-200"
        />
        </a>
       <a href="tel:+9753350861">
        <img
          src="/phone.png"
          alt="Phone"
          className="w-11 h-11 hover:scale-110 transition-transform duration-200"
        />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anshikajain196872@gmail.com&su=Hello&body=I%20want%20to%20contact%20you" target="_blank">
        <img
          src="/gmail.png"
          alt="Gmail"
          className="w-12 h-12 hover:scale-110 transition-transform duration-200"
        />
        </a>

         <a href="https://github.com/Anshikakalpana">
        <img
          src="/github.png"
          alt="github"
          className="w-14 h-14 hover:scale-110 transition-transform duration-200"
        />
        </a>
      </div>

      
      <p className="mt-2 mb-6 text-lg text-[#2899B4] font-semibold text-center max-w-xl">
        If you have any suggestions, insights, or feedback, I would greatly appreciate hearing from you.
      </p>

     
      <form onSubmit={onSubmit} className="flex flex-col gap-5 bg-gray-300 border-gray-600 p-8 rounded-2xl shadow-lg w-full max-w-md text-black " id="formm">
        <input
          name='name'
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3 rounded-lg border  bg-transparent  focus:outline-none focus:ring-2 focus:ring-[#2899B4] transition"
        />
        <input
          name='email'
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg border  bg-transparent  focus:outline-none focus:ring-2 focus:ring-[#2899B4] transition"
        />
        <textarea
          name='message and suggestions'
          rows={4}
          value={message}
           placeholder="Enter your message and suggestions"
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3 rounded-lg border bg-transparent  focus:outline-none focus:ring-2 focus:ring-[#2899B4] transition resize-none"
        />
        <button
          type="submit"
          className="bg-[#2899B4] hover:bg-[#1f8199] text-black font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[#2899B4]/40"
          
        >
          Send Message
        </button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
