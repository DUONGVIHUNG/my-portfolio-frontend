import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import {getProject} from "../services/projectService"

function Project(){

    const {data:projects,loading,error} = useFetch(getProject,1);

    const [openIndex,setOpenIndex] = useState(0);
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index? -1:index);
    }

//     const projectData = [
//   { title: 'Project One', content: 'blablablablabk' }, // This is projectData[0]
//   { title: 'Project Two', content: '...' }, // This is projectData[1]
//   // ... and so on
// ];

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

    if (!projects){
      return null;
    }



  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Projects</h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          A timeline of my key projects. Click on any project to see the details.
        </p>
      </div>

      {/* 3. This is the new, simpler, and more robust timeline structure. */}
      <div className="relative">
        {/* The central timeline line */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2" aria-hidden="true"></div>

        <div className="space-y-12">
           {/* ==================== 1. START DOT (NEW) ==================== */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-1/2 pr-16">
              <div className="flex justify-end">
                <div className="text-right">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Start of Journey</h3>
                  <p className="text-sm text-gray-500">2023-04 新卒・入社</p>
                </div>
              </div>
            </div>
          </div>
          {/* We use .map() to generate the timeline items from our data array */}
          {projects.map((project, index) => {
            // This logic determines if the card goes on the left or right
            const isOdd = index % 2 !== 0;

            return (
              <div key={index} className="relative">
                {/* The timeline dot */}
                <div className="absolute top-6 left-1/2 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2"></div>

                {/* The container for the card */}
                {/* This is the magic: it takes up half the width and uses margin-left: auto to push itself to the right */}
                <div className={`w-1/2 ${isOdd ? 'ml-auto pl-16' : 'pr-16'}`}>
                  <Card
                    projectId={project.projectId}
                    projectName={project.projectName}
                    startDate={project.startDate}
                    endDate={project.endDate}
                    details={project.detail}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  >
                    {/* We pass the date and content as children for better structure */}
                    <div className="space-y-6">
                       <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">ポジション</h4>
                          <p className="text-base text-gray-800 dark:text-gray-200">{project.projectRole}</p>
                        </div>

                         <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">プロジェクトサイズ</h4>
                          <p className="text-base text-gray-800 dark:text-gray-200">{project.projectSize}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">担当フェーズ</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.projectPhase.map((phase) => (
                              <span
                                key={phase}
                                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                              >
                                {phase}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">テックスタック</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                         <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">実績・取り組み</h4>
                          <ol className="list-decimal list-inside text-base text-gray-800 dark:text-gray-200">
                            {project.lessonLearned.map((lesson, index) => (
                              <li key={index}>{lesson}</li>
                            ))}
                          </ol>
                        </div>

                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
           {/* ==================== 3. END DOT (NEW) ==================== */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-1/2 ml-auto pl-16">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">To be continued...</h3>
              <p className="text-sm text-gray-500">学び続き成長続きへ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}


export default Project