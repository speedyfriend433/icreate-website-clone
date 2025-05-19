'use client';

import { ReactNode, useState } from 'react';

interface ExpandableDetailsProps {
  summary: string;
  children: ReactNode;
  color: string;
}

const ExpandableDetails = ({ summary, children, color }: ExpandableDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-2">
      <button
        onClick={toggleDetails}
        className={`font-medium text-2xl ${color} flex items-center w-full text-left`}
      >
        <span className="mr-2">{isOpen ? '▼' : '▶'}</span>
        {summary}
      </button>

      {isOpen && (
        <div className="mt-2 ml-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableDetails;
