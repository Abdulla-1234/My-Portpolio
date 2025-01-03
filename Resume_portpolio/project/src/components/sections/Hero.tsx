import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              John Doe
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              B.Tech Computer Science Student
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl animate-slide-in" style={{ animationDelay: '0.4s' }}>
              Passionate about building innovative solutions and exploring new technologies. 
              Focusing on full-stack development and machine learning, with a keen interest 
              in solving real-world problems through technology.
            </p>
            <div className="flex gap-6 justify-center md:justify-start animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:john@example.com" icon={<Mail />} />
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-xl relative z-10 hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all duration-300 hover-scale"
    >
      {icon}
    </a>
  );
}