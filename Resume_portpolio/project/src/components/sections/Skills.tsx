import React from 'react';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

export function Skills() {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-primary-50 to-white" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<Code2 className="w-8 h-8" />}
            title="Programming"
            skills={['Python', 'Java', 'JavaScript', 'C++']}
            delay={0}
          />
          <SkillCard
            icon={<Globe className="w-8 h-8" />}
            title="Web Development"
            skills={['React', 'Node.js', 'HTML/CSS', 'TypeScript']}
            delay={0.2}
          />
          <SkillCard
            icon={<Database className="w-8 h-8" />}
            title="Databases"
            skills={['MySQL', 'MongoDB', 'PostgreSQL']}
            delay={0.4}
          />
          <SkillCard
            icon={<Terminal className="w-8 h-8" />}
            title="Tools & Technologies"
            skills={['Git', 'Docker', 'AWS', 'Linux']}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  skills,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}) {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-primary-500 mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mr-3" />
            <span className="text-gray-600">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}