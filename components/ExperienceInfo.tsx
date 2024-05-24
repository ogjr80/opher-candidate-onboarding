// components/ExperienceInfo.tsx
'use client'; 

import { useState } from 'react';

export interface ExperienceInfoData {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  achievements: string;
}

interface ExperienceInfoProps {
  data: ExperienceInfoData[];
  onChange: (data: ExperienceInfoData[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const ExperienceInfo: React.FC<ExperienceInfoProps> = ({ data, onChange, onNext, onBack }) => {
  const [experiences, setExperiences] = useState<ExperienceInfoData[]>(data.length ? data : [{ company: '', jobTitle: '', startDate: '', endDate: '', responsibilities: '', achievements: '' }]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const values = [...experiences];
    values[index][e.target.name] = e.target.value;
    setExperiences(values);
  };

  const handleAdd = () => {
    setExperiences([...experiences, { company: '', jobTitle: '', startDate: '', endDate: '', responsibilities: '', achievements: '' }]);
  };

  const handleSubmit = () => {
    onChange(experiences);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Experience Information</h1>
      <p className="mb-4 text-gray-600">Please provide your experience information. This includes your company name, job title, start date, end date, responsibilities, and achievements.</p>
      <form>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input type="text" name="company" value={experience.company} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Job Title</label>
            <input type="text" name="jobTitle" value={experience.jobTitle} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Start Date</label>
            <input type="date" name="startDate" value={experience.startDate} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">End Date</label>
            <input type="date" name="endDate" value={experience.endDate} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Responsibilities</label>
            <textarea name="responsibilities" value={experience.responsibilities} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"></textarea>
            <label className="block text-gray-700">Achievements (optional)</label>
            <textarea name="achievements" value={experience.achievements} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"></textarea>
          </div>
        ))}
        <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded mb-4" onClick={handleAdd}>Add Another Experience</button>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded" onClick={onBack}>
            Back
          </button>
          <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceInfo;
