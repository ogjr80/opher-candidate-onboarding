// app/onboarding/page.tsx
'use client'; 

import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Welcome from '../components/Welcome';
import PersonalInfo, { PersonalInfoData } from '../components/PersonalInfo';
import AddressInfo, { AddressInfoData } from '../components/AddressInfo';
import EducationInfo, { EducationInfoData } from '../components/EducationInfo';
import ExperienceInfo, { ExperienceInfoData } from '../components/ExperienceInfo';
import Projects, { ProjectData } from '../components/Projects';
import FileUploads, { FileUploadsData } from '../components/FileUploads';
import Review from '../components/Review';

const steps = [
  'Welcome',
  'Personal Information',
  'Address Information',
  'Education Information',
  'Experience Information',
  'Projects',
  'File Uploads',
  'Review and Submission'
];

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      contactNumber: '',
      email: '',
      nationality: ''
    },
    addressInfo: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    },
    educationInfo: [],
    experienceInfo: [],
    projects: [],
    files: {
      identityDocument: [],
      certificates: [],
      transcript: [],
      others: []
    }
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);
  const handleSaveAndContinueLater = () => alert('Progress saved!');

  const handleChange = (section: keyof FormData, data: any) => {
    setFormData({ ...formData, [section]: data });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <ProgressBar step={currentStep} totalSteps={steps.length} />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-8 transition-opacity duration-500 ease-in-out">
        {currentStep === 0 && <Welcome onNext={handleNext} />}
        {currentStep === 1 && (
          <PersonalInfo
            data={formData.personalInfo}
            onChange={(data) => handleChange('personalInfo', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 2 && (
          <AddressInfo
            data={formData.addressInfo}
            onChange={(data) => handleChange('addressInfo', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 3 && (
          <EducationInfo
            data={formData.educationInfo}
            onChange={(data) => handleChange('educationInfo', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 4 && (
          <ExperienceInfo
            data={formData.experienceInfo}
            onChange={(data) => handleChange('experienceInfo', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 5 && (
          <Projects
            data={formData.projects}
            onChange={(data) => handleChange('projects', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 6 && (
          <FileUploads
            data={formData.files}
            onChange={(data) => handleChange('files', data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 7 && (
          <Review
            data={formData}
            onSubmit={() => alert('Submission complete!')}
            onBack={handleBack}
          />
        )}
        <div className="mt-4">
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={handleSaveAndContinueLater}>
            Save and Continue Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;