// app/marketplace/components/CandidateCard.tsx
import React from 'react';

interface CandidateCardProps {
  profilePicture: string;
  name: string;
  title: string;
  location: string;
  skills: string[];
  experience: string;
  education: string;
  availability: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ profilePicture, name, title, location, skills, experience, education, availability }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src={profilePicture} alt={`${name}'s profile`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-600 mb-2">Skills: {skills.join(', ')}</p>
      <p className="text-gray-600 mb-2">Experience: {experience}</p>
      <p className="text-gray-600 mb-2">Education: {education}</p>
      <p className="text-gray-600 mb-4">Availability: {availability}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">View Profile</button>
    </div>
  );
};

export default CandidateCard;
