// components/Projects.tsx
'use client'; 

import { useState } from 'react';

export interface ProjectData {
  title: string;
  description: string;
  technologies: string;
  startDate: string;
  endDate: string;
  role: string;
  url: string;
  artifacts: File[];
}

interface ProjectsProps {
  data: ProjectData[];
  onChange: (data: ProjectData[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ data, onChange, onNext, onBack }) => {
  const [projects, setProjects] = useState<ProjectData[]>(data.length ? data : [{ title: '', description: '', technologies: '', startDate: '', endDate: '', role: '', url: '', artifacts: [] }]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const values = [...projects];
    values[index][e.target.name] = e.target.value;
    setProjects(values);
  };

  const handleAdd = () => {
    setProjects([...projects, { title: '', description: '', technologies: '', startDate: '', endDate: '', role: '', url: '', artifacts: [] }]);
  };

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...projects];
    values[index].artifacts = Array.from(e.target.files || []);
    setProjects(values);
  };

  const handleSubmit = () => {
    onChange(projects);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="mb-4 text-gray-600">Please provide your project information. This includes your project title, description, technologies used, start date, end date, role, URL (if applicable), and artifacts.</p>
      <form>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Project Title</label>
            <input type="text" name="title" value={project.title} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Description</label>
            <textarea name="description" value={project.description} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"></textarea>
            <label className="block text-gray-700">Technologies Used</label>
            <input type="text" name="technologies" value={project.technologies} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Start Date</label>
            <input type="date" name="startDate" value={project.startDate} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">End Date</label>
            <input type="date" name="endDate" value={project.endDate} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Role</label>
            <input type="text" name="role" value={project.role} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Project URL (if applicable)</label>
            <input type="url" name="url" value={project.url} onChange={(e) => handleChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
            <label className="block text-gray-700">Artifacts</label>
            <input type="file" name="artifacts" multiple onChange={(e) => handleFileChange(index, e)} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
          </div>
        ))}
        <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded mb-4" onClick={handleAdd}>Add Another Project</button>
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

export default Projects;
