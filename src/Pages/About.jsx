import React from 'react';
import { Link } from 'react-router-dom';
import MyAvatar from '../assets/images/my-logo.png'

// --- DATA: Keep your data separate for easy updates ---

const profileData = {
  imageUrl: MyAvatar, // Replace with your professional photo URL
  name: '[Your Name]',
  title: 'BrSE',
  summary: '[Your one-sentence mission statement. e.g., I build intuitive and high-performance web applications that solve real-world problems.]',
};

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '2', label: 'Certifications' },
];

const skills = {
  'Core Languages & Frontend': ['JavaScript (ES6+)', 'HTML5 & CSS3', 'React', 'Tailwind CSS'],
  'Backend & Databases': ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PostgreSQL'],
  'Tools & Version Control': ['Git', 'GitHub', 'VS Code', 'Postman'],
  'Currently Learning & Exploring': ['TypeScript', 'Docker', 'AWS Basics', 'Testing (Jest)'],
};

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    date: 'Jan 2023 - Present',
    description: [
      'Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%.',
      'Mentored junior developers and established best practices for code reviews and testing.',
      'Collaborated with UI/UX designers to translate complex requirements into responsive and accessible components.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Web Innovators LLC',
    date: 'Jun 2021 - Dec 2022',
    description: [
      'Developed and maintained features for a large-scale e-commerce platform.',
      'Assisted in the migration of a legacy jQuery codebase to modern React.',
      'Wrote unit and integration tests to ensure code quality and stability.',
    ],
  },
];

// --- COMPONENT ---

function ProfilePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* === 1. HEADER / INTRODUCTION === */}
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3">
            <img 
              src={profileData.imageUrl} 
              alt={`Professional headshot of ${profileData.name}`}
              className="rounded-full w-48 h-48 mx-auto shadow-lg object-cover"
            />
          </div>
          <div className="mt-8 md:mt-0 md:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              {profileData.name}
            </h1>
            <p className="mt-2 text-2xl font-medium text-blue-600 dark:text-blue-400">
              {profileData.title}<span className="text-blue-600 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">現在</span>
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {profileData.summary}
            </p>
          </div>
        </div>

        {/* === 2. KEY STATS === */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gray-200 dark:border-gray-700 py-8">
          {stats.map(stat => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* === 3. SKILLS / MY TOOLKIT (Career Changer Version) === */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">My Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {Object.entries(skills).map(([category, skillList]) => (
                // Add a conditional border color to make the "Currently Learning" card special
                <div 
                  key={category}
                  className={`p-6 rounded-lg shadow-sm ${
                    category === 'Currently Learning & Exploring' 
                      ? 'bg-blue-50 border-2 border-blue-300 dark:bg-blue-900/50 dark:border-blue-700' 
                      : 'bg-gray-50 dark:bg-gray-800'
                  }`}
                >
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 capitalize mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <span
                        key={skill} 
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
          
        {/* === 4. WORK EXPERIENCE === */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">資格</h2>
          <div className="relative border-s border-gray-200 dark:border-gray-700">
            {experience.map((job, index) => (
              <div key={index} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {job.role}
                  {/* <span className="text-blue-600 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Current</span> */}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.date}</time>
                {/* <ul className="list-disc list-inside mt-2 text-base font-normal text-gray-600 dark:text-gray-300 space-y-1">
                  {job.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul> */}
              </div>
            ))}
          </div>
        </div>

        {/* === 5. CALL TO ACTION === */}
        <div className="mt-16 text-center border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">職務経歴</h2>
            {/* <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p> */}
            <div className="mt-6 flex justify-center gap-x-4">
                {/* <a href="mailto:your.email@example.com" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                    Email Me
                </a> */}
                <Link to="/project" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
                    プロジェクトを見る
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;