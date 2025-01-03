import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            John Doe
          </Link>
          <div className="flex gap-8">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/projects" active={location.pathname === "/projects"}>Projects</NavLink>
            <NavLink to="/certifications" active={location.pathname === "/certifications"}>Certifications</NavLink>
            <NavLink to="/resume" active={location.pathname === "/resume"}>Resume</NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors hover:text-primary-600 ${
        active ? 'text-primary-600' : 'text-gray-600'
      }`}
    >
      {children}
    </Link>
  );
}