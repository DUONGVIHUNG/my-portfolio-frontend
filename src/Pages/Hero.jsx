import React from 'react';
import useFetch from '../hooks/useFetch';
import { getUserProfile } from '../services/githubService';

const GitHubIcon = () => (
  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" className="mb-2"> {/* Added margin-bottom */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.427 0C10.919 0 0 11 0 24.608c0 10.878 6.996 20.086 16.702 23.345 1.213.245 1.658-.53 1.658-1.181 0-.57-.04-2.526-.04-4.563-6.795 1.467-8.21-2.933-8.21-2.933-1.092-2.852-2.71-3.585-2.71-3.585-2.224-1.507.162-1.507.162-1.507 2.467.163 3.761 2.526 3.761 2.526 2.183 3.748 5.702 2.689 7.117 2.037.202-1.589.85-2.689 1.537-3.3-5.42-.57-11.121-2.689-11.121-12.141 0-2.689.97-4.889 2.507-6.6-.243-.611-1.092-3.137.243-6.519 0 0 2.062-.652 6.713 2.526a23.485 23.485 0 016.107-.815c2.062 0 4.165.271 6.107.815 4.65-3.178 6.713-2.526 6.713-2.526 1.332 3.382.484 5.908.242 6.519 1.578 1.711 2.507 3.911 2.507 6.6 0 9.452-5.701 11.53-11.161 12.141.9.774 1.658 2.24 1.658 4.563 0 3.3-.04 5.948-.04 6.763 0 .652.445 1.427 1.658 1.182C41.854 44.694 48.85 35.486 48.85 24.609 48.85 11 37.93 0 24.427 0z"
      fill="#24292f"
      className="dark:fill-white" // Added dark mode fill
    />
  </svg>
);

const Hero = () => {

  const {data:user,loading,error} = useFetch(getUserProfile,'DUONGVIHUNG');
  console.log('[Component] Rendering with state:', { user, loading, error });

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


   return (
    <section className="flex flex-col items-center justify-center dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="#"
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      role="alert"
    >
      <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
        New
      </span>{" "}
      <span className="text-sm font-medium">
        Hello
      </span>
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Hello
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      Here at Flowbite we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.
    </p>
    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a
        href="#"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        私の職務経歴
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
      </svg>
      
        私の履歴ダウンロード
      </a>
    </div>
    <div className="px-4 mx-auto text-center">
          <div className="flex justify-center items-center mt-8 text-gray-500">
            <a
              href="#"
              className="flex flex-col items-center hover:text-gray-800 dark:hover:text-gray-400"
            >
              <GitHubIcon />
              <span>My Github link</span>
            </a>
          </div>
    </div>
  </div>
</section>
  );
};

export default Hero;