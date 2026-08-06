import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just log the data — you can replace this with an API call
    console.log('Form submitted:', formData);
    alert('Message sent!');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="bg3.png" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-xl mx-4 w-full">
        <h1 className="text-3xl font-bold mb-4 text-red-400">Contact Us</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Write your message here..."
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
