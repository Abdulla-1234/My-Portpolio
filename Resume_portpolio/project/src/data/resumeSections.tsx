import React from 'react';

export const resumeSections = [
  {
    id: 'education',
    title: 'Education',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">B.Tech in Computer Science</h4>
          <p className="text-gray-600">University Name</p>
          <p className="text-gray-600">2020 - 2024</p>
          <p className="text-gray-600">CGPA: 8.5/10</p>
        </div>
      </div>
    ),
  },
  {
    id: 'experience',
    title: 'Work Experience',
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">Software Development Intern</h4>
          <p className="text-gray-600">Tech Corp Inc. | Summer 2023</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Developed feature X resulting in 30% performance improvement</li>
            <li>Collaborated with team of 5 developers</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <div className="space-y-2">
        <p><strong>Programming:</strong> Python, Java, JavaScript, C++</p>
        <p><strong>Web Technologies:</strong> React, Node.js, HTML/CSS</p>
        <p><strong>Databases:</strong> MySQL, MongoDB</p>
        <p><strong>Tools:</strong> Git, Docker, AWS</p>
      </div>
    ),
  },
];