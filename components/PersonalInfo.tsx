// components/PersonalInfo.tsx
'use client'; 

import { useState } from 'react';

export interface PersonalInfoData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  contactNumber: string;
  email: string;
  nationality: string;
}

interface PersonalInfoProps {
  data: PersonalInfoData;
  onChange: (data: PersonalInfoData) => void;
  onNext: () => void;
  onBack: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, onChange, onNext, onBack }) => {
  const [form, setForm] = useState<PersonalInfoData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onChange(form);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <p className="mb-4 text-gray-600">Please provide your personal information. This includes your full name, date of birth, gender, contact number, email address, and nationality.</p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select name="gender" value={form.gender} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Number</label>
          <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nationality</label>
          <input type="text" name="nationality" value={form.nationality} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
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

export default PersonalInfo;
