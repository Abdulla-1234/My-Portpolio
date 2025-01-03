import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ResumeSectionProps {
  section: Section;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ResumeSection({ section, isExpanded, onToggle }: ResumeSectionProps) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-800">{section.title}</span>
        <div className="text-primary-500 transition-transform duration-300">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-white">{section.content}</div>
      </div>
    </div>
  );
}