import React from 'react';
import { ExternalLink, Github, BookOpen } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  abstract: string;
  image: string;
  github: string;
  technologies: string[];
  isPublication: boolean;
  publicationLink?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Home Automation',
    abstract: 'An IoT-based home automation system that allows users to control their home appliances remotely. The system uses Raspberry Pi as the central hub and provides a React-based dashboard for monitoring and control.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b24777',
    github: 'https://github.com/username/smart-home',
    technologies: ['IoT', 'React', 'Python', 'MQTT'],
    isPublication: false,
  },
  {
    id: '2',
    title: 'Machine Learning Research Paper',
    abstract: 'Novel approach to image classification using hybrid neural networks. Published in International Journal of Computer Vision.',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    github: 'https://github.com/username/ml-research',
    technologies: ['Python', 'TensorFlow', 'Computer Vision'],
    isPublication: true,
    publicationLink: 'https://example.com/publication',
  },
];

export function ProjectsPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-transition">
      <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
        Projects & Publications
      </h1>
      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold">{project.title}</h2>
            {project.isPublication && (
              <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                Publication
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{project.abstract}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
            {project.isPublication && project.publicationLink && (
              <a
                href={project.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-secondary-600 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read Publication
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}