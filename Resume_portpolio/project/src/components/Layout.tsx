import React from 'react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-gray-800">Portfolio</span>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      {/* Resume Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isResumeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsResumeOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isResumeOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Resume</h2>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <ResumeSection title="Education">
                <p>B.Tech in Computer Science</p>
                <p className="text-gray-600">2020 - 2024</p>
                <p className="text-gray-600">CGPA: 8.5/10</p>
              </ResumeSection>
              
              <ResumeSection title="Skills">
                <ul className="list-disc list-inside space-y-1">
                  <li>Programming Languages: Python, Java, JavaScript</li>
                  <li>Web Technologies: React, Node.js, HTML/CSS</li>
                  <li>Database: MySQL, MongoDB</li>
                  <li>Tools: Git, Docker, AWS</li>
                </ul>
              </ResumeSection>

              <ResumeSection title="Experience">
                <div className="mb-4">
                  <h4 className="font-semibold">Software Development Intern</h4>
                  <p className="text-gray-600">Tech Corp Inc. | Summer 2023</p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>Developed feature X resulting in 30% performance improvement</li>
                    <li>Collaborated with team of 5 developers</li>
                  </ul>
                </div>
              </ResumeSection>

              <ResumeSection title="Certifications">
                <ul className="list-disc list-inside space-y-1">
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>Google IT Automation with Python</li>
                </ul>
              </ResumeSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-gray-800">{children}</div>
    </section>
  );
}