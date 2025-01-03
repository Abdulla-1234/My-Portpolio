import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Security'],
  },
  {
    id: '2',
    title: 'Google IT Automation with Python',
    issuer: 'Google',
    date: 'January 2024',
    link: 'https://www.coursera.org/professional-certificates/google-it-automation',
    skills: ['Python', 'Automation', 'Git', 'IT Operations'],
  },
];

export function CertificationsPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-transition">
      <h1 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
        Certifications
      </h1>
      <div className="grid gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="text-primary-500">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
              <p className="text-gray-600 mb-4">
                {certificate.issuer} • {certificate.date}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View Certificate</span>
          </a>
        </div>
      </div>
    </div>
  );
}