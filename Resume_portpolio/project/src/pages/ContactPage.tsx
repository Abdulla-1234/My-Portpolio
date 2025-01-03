import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-12">Contact</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <ContactItem icon={<Mail />} href="mailto:john@example.com">
              john@example.com
            </ContactItem>
            <ContactItem icon={<Phone />} href="tel:+1234567890">
              +1 (234) 567-890
            </ContactItem>
            <ContactItem icon={<MapPin />}>
              San Francisco, CA
            </ContactItem>
            <ContactItem icon={<Github />} href="https://github.com">
              github.com/johndoe
            </ContactItem>
            <ContactItem icon={<Linkedin />} href="https://linkedin.com">
              linkedin.com/in/johndoe
            </ContactItem>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ 
  icon, 
  children, 
  href 
}: { 
  icon: React.ReactNode; 
  children: React.ReactNode; 
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
      <div className="text-blue-600">{icon}</div>
      <span>{children}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}