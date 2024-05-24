// components/Review.tsx
'use client'; 

import { PersonalInfoData } from './PersonalInfo';
import { AddressInfoData } from './AddressInfo';
import { EducationInfoData } from './EducationInfo';
import { ExperienceInfoData } from './ExperienceInfo';
import { ProjectData } from './Projects';
import { FileUploadsData } from './FileUploads';

export interface FormData {
  personalInfo: PersonalInfoData;
  addressInfo: AddressInfoData;
  educationInfo: EducationInfoData[];
  experienceInfo: ExperienceInfoData[];
  projects: ProjectData[];
  files: FileUploadsData;
}

interface ReviewProps {
  data: FormData;
  onSubmit: () => void;
  onBack: () => void;
}

const Review: React.FC<ReviewProps> = ({ data, onSubmit, onBack }) => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Final Review and Submission</h1>
      <p className="mb-4 text-gray-600">Please review the information you have entered. You can edit any section before final submission.</p>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Personal Information</h2>
        <p>Full Name: {data.personalInfo.fullName}</p>
        <p>Date of Birth: {data.personalInfo.dateOfBirth}</p>
        <p>Gender: {data.personalInfo.gender}</p>
        <p>Contact Number: {data.personalInfo.contactNumber}</p>
        <p>Email Address: {data.personalInfo.email}</p>
        <p>Nationality: {data.personalInfo.nationality}</p>
        <button className="text-blue-500" onClick={onBack}>
          Edit
        </button>
      </div>
      {/* Repeat similar sections for Address Information, Education Information, etc. */}
      <div className="flex justify-between mt-8">
        <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={onBack}>
          Back
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
