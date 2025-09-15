import React from 'react';
import { Link } from 'react-router-dom';
import MyAvatar from '../assets/images/my-logo.png'
import useFetch from '../hooks/useFetch';
import { getUser } from '../services/userService';

// --- DATA: Keep your data separate for easy updates ---

const profileData = {
  imageUrl: MyAvatar, // Replace with your professional photo URL
  name: '[Your Name]',
  title: 'BrSE',
  summary: '[Your one-sentence mission statement. e.g., I build intuitive and high-performance web applications that solve real-world problems.]',
};

// const stats = [
//   { value: '3+', label: 'Years Experience' },
//   { value: '15+', label: 'Projects Completed' },
//   { value: '2', label: 'Certifications' },
// ];

// const skills = {
//   'Core Languages & Frontend': ['JavaScript (ES6+)', 'HTML5 & CSS3', 'React', 'Tailwind CSS'],
//   'Backend & Databases': ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PostgreSQL'],
//   'Tools & Version Control': ['Git', 'GitHub', 'VS Code', 'Postman'],
//   'Currently Learning & Exploring': ['TypeScript', 'Docker', 'AWS Basics', 'Testing (Jest)'],
// };

// const experience = [
//   {
//     role: 'Senior Frontend Developer',
//     company: 'Tech Solutions Inc.',
//     date: 'Jan 2023 - Present',
//     description: [
//       'Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%.',
//       'Mentored junior developers and established best practices for code reviews and testing.',
//       'Collaborated with UI/UX designers to translate complex requirements into responsive and accessible components.',
//     ],
//   },
//   {
//     role: 'Junior Web Developer',
//     company: 'Web Innovators LLC',
//     date: 'Jun 2021 - Dec 2022',
//     description: [
//       'Developed and maintained features for a large-scale e-commerce platform.',
//       'Assisted in the migration of a legacy jQuery codebase to modern React.',
//       'Wrote unit and integration tests to ensure code quality and stability.',
//     ],
//   },
// ];

// --- COMPONENT ---

function ProfilePage() {

  const {data:user,loading,error} = useFetch(getUser,1);

   if (loading){
    return(
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
    );
  }

   if (error){
      return(
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">API called failed!</span> Try again!
        </div>
      );
    }

    if (!user){
      return null;
    }

    console.log('Successfully fetched user data:', user);

  console.log(user)

  return (
    <div>
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
              {user.name}
            </h1>
            <p className="mt-2 text-2xl font-medium text-blue-600 dark:text-blue-400">
              {user.jobTitle}<span className="text-blue-600 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">現在</span>
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {user.selfPr}
            </p>
          </div>
        </div>

        {/* === 2. KEY STATS === */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gray-200 dark:border-gray-700 py-8">

            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{user.yearExp}+</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">経験年数</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{user.projectNums}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">プロジェクト数</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{user.certNums}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">資格数</p>
            </div>
        </div>

        {/* === 3. SKILLS / MY TOOLKIT (Career Changer Version) === */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">My Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* {Object.entries(skills).map(([category, skillList]) => (
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
              ))} */}
              <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 capitalize mb-4">Frontend</h3>
                 <div className="flex flex-wrap gap-2">
                    {user.frontEnd.map(tech => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

              </div>

              <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 capitalize mb-4">Backend</h3>
                 <div className="flex flex-wrap gap-2">
                    {user.backEnd.map(tech => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

              </div>

              <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 capitalize mb-4">Version Control & Tool</h3>
                 <div className="flex flex-wrap gap-2">
                    {user.tool.map(tech => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

              </div>

              <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 capitalize mb-4">Currently Learning & Exploring</h3>
                 <div className="flex flex-wrap gap-2">
                    {user.learning.map(tech => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

              </div>


            </div>
          </div>
          
        {/* === 4. WORK EXPERIENCE === */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">資格</h2>
          <div className="relative border-s border-gray-200 dark:border-gray-700">
            {user.cert.map((cert, index) => {
              const parts = cert.split(":");
              const certName = parts[0] ? parts[0].trim() : 'Unnamed Certification';
              const certDate = parts[1] ? parts[1].trim() : 'No Date';

              return (
              <div key={index} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>

                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {certName}
                  {/* <span className="text-blue-600 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Current</span> */}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{certDate}</time>
                {/* <ul className="list-disc list-inside mt-2 text-base font-normal text-gray-600 dark:text-gray-300 space-y-1">
                  {job.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul> */}
              </div>
              );
            })}
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
                <Link to="/project" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      経歴を見る
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;