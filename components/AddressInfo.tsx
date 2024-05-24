// components/AddressInfo.tsx
'use client'; 

import { useState } from 'react';

export interface AddressInfoData {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface AddressInfoProps {
  data: AddressInfoData;
  onChange: (data: AddressInfoData) => void;
  onNext: () => void;
  onBack: () => void;
}

const AddressInfo: React.FC<AddressInfoProps> = ({ data, onChange, onNext, onBack }) => {
  const [form, setForm] = useState<AddressInfoData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onChange(form);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Address Information</h1>
      <p className="mb-4 text-gray-600">Please provide your address information. This includes your street address, city, state/province, postal code, and country.</p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Street Address</label>
          <input type="text" name="streetAddress" value={form.streetAddress} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State/Province</label>
          <input type="text" name="state" value={form.state} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Postal Code</label>
          <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input type="text" name="country" value={form.country} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
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

export default AddressInfo;
