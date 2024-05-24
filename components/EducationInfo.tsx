// components/EducationInfo.tsx
'use client'; 

import { useState } from 'react';

export interface EducationInfoData {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  achievements: string;
}

interface EducationInfoProps {
  data: EducationInfoData[];
  onChange: (data: EducationInfoData[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const EducationInfo: React.FC<EducationInfoProps> = ({ data, onChange, onNext, onBack }) => {
  const [educations, setEducations] = useState<EducationInfoData[]>(data.length ? data : [{ institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', grade: '', achievements: '' }]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const values = [...educations];
    values[index][e.target.name] = e.target.value;
    setEducations(values);
  };

  const handleAdd = () => {
    setEducations([...educations, { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', grade: '', achievements: '' }]);
  };

  const handleSubmit = () => {
    onChange(educations);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Education Information</h1>
      <p className="mb-4 text-gray-600">Please provide your education information. This includes your institution name, degree/course, field of study, start date, end date, grade/CGPA, and achievements.</p>
      <form>
        {educations.map((education, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Institution Name</label>
            <input type="text" name="institution" value={education.institution} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Degree/Course</label>
            <input type="text" name="degree" value={education.degree} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Field of Study</label>
            <input type="text" name="fieldOfStudy" value={education.fieldOfStudy} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Start Date</label>
            <input type="date" name="startDate" value={education.startDate} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">End Date</label>
            <input type="date" name="endDate" value={education.endDate} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Grade/CGPA (optional)</label>
            <input type="text" name="grade" value={education.grade} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Achievements (optional)</label>
            <textarea name="achievements" value={education.achievements} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"></textarea>
          </div>
        ))}
        <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded mb-4" onClick={handleAdd}>Add Another Education</button>
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

export default EducationInfo;
