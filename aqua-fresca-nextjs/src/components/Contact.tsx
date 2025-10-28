'use client';

import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your submission! We will contact you soon.');
    e.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Spring Road, Dili, Timor-Leste',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+670 7835 1999',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'marketing.austim@gmail.com',
    },
    {
      icon: '⏰',
      title: 'Hours',
      content: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or orders
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">Get in Touch</h3>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <div className="text-3xl mr-4 shrink-0">{info.icon}</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">{info.title}</h4>
                  {Array.isArray(info.content) ? (
                    info.content.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="+670 XXXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg resize-y focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
