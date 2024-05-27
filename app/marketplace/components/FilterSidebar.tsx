// app/marketplace/components/FilterSidebar.tsx
import React from 'react';

const FilterSidebar: React.FC = () => {
  return (
    <div className="w-1/5 p-4 bg-white border-r">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Skills</label>
        <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Enter skills" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Enter location" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Experience Level</label>
        <select className="w-full px-4 py-2 border rounded-md">
          <option>Junior</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Education</label>
        <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Enter education" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Availability</label>
        <select className="w-full px-4 py-2 border rounded-md">
          <option>Immediately Available</option>
          <option>Available in 1 month</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
