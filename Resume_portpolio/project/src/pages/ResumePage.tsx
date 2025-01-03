import React, { useState } from 'react';
import { ResumeSection } from '../components/resume/ResumeSection';
import { ResumeUpload } from '../components/resume/ResumeUpload';
import { ImageModal } from '../components/resume/ImageModal';
import { resumeSections } from '../data/resumeSections';

export function ResumePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [resumeImage, setResumeImage] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-12">Resume</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ResumeUpload
          onFileChange={handleFileChange}
          resumeImage={resumeImage}
          onRemove={() => setResumeImage(null)}
          onImageClick={() => setIsImageModalOpen(true)}
        />

        <div className="space-y-4">
          {resumeSections.map((section) => (
            <ResumeSection
              key={section.id}
              section={section}
              isExpanded={expandedSection === section.id}
              onToggle={() => setExpandedSection(
                expandedSection === section.id ? null : section.id
              )}
            />
          ))}
        </div>
      </div>

      {isImageModalOpen && resumeImage && (
        <ImageModal
          image={resumeImage}
          onClose={() => setIsImageModalOpen(false)}
        />
      )}
    </div>
  );
}