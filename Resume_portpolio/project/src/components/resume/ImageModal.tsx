import React from 'react';

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="max-w-4xl max-h-[90vh] overflow-auto bg-white p-4 rounded-lg">
        <img
          src={image}
          alt="Resume"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}