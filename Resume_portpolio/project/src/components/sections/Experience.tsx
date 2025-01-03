import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Internships</h2>
        <div className="space-y-8">
          <ExperienceCard
            title="Software Development Intern"
            company="Tech Corp Inc."
            location="San Francisco, CA"
            date="Jun 2023 - Aug 2023"
            description={[
              "Developed and maintained features for the company's main product using React and Node.js",
              "Improved application performance by 30% through code optimization",
              "Collaborated with senior developers on architecture decisions",
            ]}
          />
          <ExperienceCard
            title="Research Assistant"
            company="University Research Lab"
            location="New York, NY"
            date="Jan 2023 - May 2023"
            description={[
              "Conducted research on machine learning algorithms for computer vision",
              "Published a paper in an international conference",
              "Mentored junior students in programming concepts",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  company,
  location,
  date,
  description,
}: {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <h4 className="text-lg text-gray-600 mb-4">{company}</h4>
      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      </div>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}