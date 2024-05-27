// app/marketplace/page.tsx
import React from 'react';
import FilterSidebar from './components/FilterSidebar';
import CandidateCard from './components/CandidateCard';

const Marketplace: React.FC = () => {
  const candidates = [
    {
      profilePicture: '/images/profile1.jpg',
      name: 'Jane Doe',
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: '5 years',
      education: 'B.Sc. Computer Science',
      availability: 'Immediately Available',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'John Smith',
      title: 'Data Scientist',
      location: 'New York, NY',
      skills: ['Python', 'Machine Learning', 'R'],
      experience: '3 years',
      education: 'M.Sc. Data Science',
      availability: 'Available in 1 month',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'Alice Johnson',
      title: 'DevOps Engineer',
      location: 'Austin, TX',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      experience: '4 years',
      education: 'B.Sc. Information Technology',
      availability: 'Immediately Available',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'Bob Lee',
      title: 'Backend Developer',
      location: 'Chicago, IL',
      skills: ['Java', 'Spring Boot', 'Microservices'],
      experience: '6 years',
      education: 'B.Sc. Computer Engineering',
      availability: 'Available in 2 weeks',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'Carol White',
      title: 'Frontend Developer',
      location: 'Seattle, WA',
      skills: ['HTML', 'CSS', 'JavaScript'],
      experience: '2 years',
      education: 'B.Sc. Software Engineering',
      availability: 'Available in 1 month',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'David Black',
      title: 'Full Stack Developer',
      location: 'Miami, FL',
      skills: ['React', 'Node.js', 'MongoDB'],
      experience: '5 years',
      education: 'B.Sc. Computer Science',
      availability: 'Immediately Available',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'Eve Green',
      title: 'Project Manager',
      location: 'Los Angeles, CA',
      skills: ['Project Management', 'Agile', 'Scrum'],
      experience: '7 years',
      education: 'MBA',
      availability: 'Available in 2 weeks',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'Frank Brown',
      title: 'UI/UX Designer',
      location: 'San Diego, CA',
      skills: ['Sketch', 'Figma', 'Adobe XD'],
      experience: '3 years',
      education: 'B.Des. Graphic Design',
      availability: 'Immediately Available',
    },
    {
      profilePicture: '/images/profil1.jpg',
      name: 'Grace Davis',
      title: 'Quality Assurance Engineer',
      location: 'Boston, MA',
      skills: ['Selenium', 'JUnit', 'Cucumber'],
      experience: '4 years',
      education: 'B.Sc. Software Engineering',
      availability: 'Available in 1 month',
    },
    {
      profilePicture: '/images/profile1.jpg',
      name: 'Hank Harris',
      title: 'Mobile Developer',
      location: 'Denver, CO',
      skills: ['Swift', 'Kotlin', 'React Native'],
      experience: '5 years',
      education: 'B.Sc. Computer Science',
      availability: 'Available in 1 month',
    },
    {
      profilePicture: '/images/profile1.jpg',
      name: 'Ivy Wilson',
      title: 'Cloud Engineer',
      location: 'Phoenix, AZ',
      skills: ['Azure', 'AWS', 'GCP'],
      experience: '6 years',
      education: 'B.Sc. Information Technology',
      availability: 'Immediately Available',
    },
    {
      profilePicture: '/images/profile1.jpg',
      name: 'Jack Martin',
      title: 'Cybersecurity Specialist',
      location: 'Atlanta, GA',
      skills: ['Network Security', 'Penetration Testing', 'Firewalls'],
      experience: '4 years',
      education: 'B.Sc. Cybersecurity',
      availability: 'Available in 2 weeks',
    }
  ];

  return (
    <div className="flex min-h-screen">
      <FilterSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Candidate Marketplace</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate, index) => (
            <CandidateCard key={index} {...candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
