import React from 'react';
import { Upload } from 'lucide-react';

interface ResumeUploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resumeImage: string | null;
  onRemove: () => void;
  onImageClick: () => void;
}

export function ResumeUpload({ 
  onFileChange, 
  resumeImage, 
  onRemove, 
  onImageClick 
}: ResumeUploadProps) {
  return (
    <div className="animate-fade-in">
      {resumeImage ? (
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={resumeImage}
            alt="Resume"
            className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={onImageClick}
          />
          <button
            onClick={onRemove}
            className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
          >
            ×
          </button>
        </div>
      ) : (
        <label className="block w-full h-96 border-2 border-dashed border-primary-300 rounded-xl cursor-pointer hover:border-primary-500 transition-colors duration-300 bg-gradient-to-br from-primary-50 to-secondary-50">
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="hidden"
          />
          <div className="h-full flex flex-col items-center justify-center text-gray-500">
            <Upload className="w-16 h-16 mb-4 text-primary-500" />
            <p className="text-lg">Click to upload resume image</p>
            <p className="text-sm text-gray-400 mt-2">Supports JPG, PNG formats</p>
          </div>
        </label>
      )}
    </div>
  );
}