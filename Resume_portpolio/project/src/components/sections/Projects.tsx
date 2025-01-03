import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Smart Home Automation"
            description="IoT-based home automation system using Raspberry Pi and React"
            tags={['IoT', 'React', 'Python', 'MQTT']}
            image="https://images.unsplash.com/photo-1558002038-bb4237b24777"
            github="https://github.com"
            demo="https://demo.com"
          />
          <ProjectCard
            title="AI Image Recognition"
            description="Deep learning model for real-time object detection"
            tags={['Python', 'TensorFlow', 'OpenCV']}
            image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            github="https://github.com"
            demo="https://demo.com"
          />
          <ProjectCard
            title="E-Learning Platform"
            description="Full-stack web application for online education"
            tags={['React', 'Node.js', 'MongoDB']}
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            github="https://github.com"
            demo="https://demo.com"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  github,
  demo,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ExternalLink className="w-5 h-5" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}