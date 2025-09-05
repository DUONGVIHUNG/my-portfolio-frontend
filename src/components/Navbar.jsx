import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar  ({ title }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {name:'Project', path:'/project'},
  ];

  const [isMenuOpen,setIsMenuOpen] = useState(false);

const baseLink = "block py-2 px-3 rounded-sm md:p-0";
const activeLink = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500";
const inActiveLink = "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    // original navbar
    // <nav className="flex items-center justify-between py-4 bg-gray-800 px-4 rounded-lg">
    //   <h1 className="text-2xl font-bold text-indigo-400">
    //     {title}
    //   </h1>
    //   <div className="flex items-center space-x-4">
    //     {navItems.map((item) => (
    //       <button
    //         key={item.section}
    //         onClick={() => setActiveSection(item.section)}
    //         className={`
    //           px-4 py-2 rounded-lg font-medium transition-colors
    //           ${activeSection === item.section
    //             ? 'bg-indigo-600 text-white shadow-lg'
    //             : 'text-gray-300 hover:bg-gray-700'
    //           }
    //         `}
    //       >
    //         {item.name}
    //       </button>
    //     ))}
    //   </div>
    // </nav>


  <nav className="border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
          {title}
        </span>
      </NavLink>

      <button
        onClick={()=>setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div className={`${isMenuOpen ? 'block': 'hidden'} w-full md:block md:w-auto`}  id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

          {
            navItems.map(
              (item) => {
                return(
                <li key={item.name}>

                  <NavLink to={item.path}
                  onClick={()=>setIsMenuOpen(false)}
                  className= {
                    ({isActive}) =>
                      `${baseLink} ${isActive?activeLink:inActiveLink}`
                  }
                  >
                      {item.name}
                  </NavLink>
                </li>);
              }
            )
          }

        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;