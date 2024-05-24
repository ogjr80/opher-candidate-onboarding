// components/FileUploads.tsx
'use client'; 
import { useState } from 'react';

export interface FileUploadsData {
  identityDocument: File[];
  certificates: File[];
  transcript: File[];
  others: File[];
}

interface FileUploadsProps {
  data: FileUploadsData;
  onChange: (data: FileUploadsData) => void;
  onNext: () => void;
  onBack: () => void;
}

const FileUploads: React.FC<FileUploadsProps> = ({ data, onChange, onNext, onBack }) => {
  const [files, setFiles] = useState<FileUploadsData>(data);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles({
      ...files,
      [e.target.name]: Array.from(e.target.files || [])
    });
  };

  const handleSubmit = () => {
    onChange(files);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">File Uploads</h1>
      <p className="mb-4 text-gray-600">Please upload your necessary documents. This includes your identity document, certificates/qualifications, school transcript, and any other relevant documents.</p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Identity Document</label>
          <input type="file" name="identityDocument" multiple onChange={handleFileChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Certificates/Qualifications</label>
          <input type="file" name="certificates" multiple onChange={handleFileChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">School Transcript</label>
          <input type="file" name="transcript" multiple onChange={handleFileChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Other Documents</label>
          <input type="file" name="others" multiple onChange={handleFileChange} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2" />
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

export default FileUploads;
