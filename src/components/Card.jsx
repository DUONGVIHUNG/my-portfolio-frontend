import React from "react";


function Card({projectId,projectName,startDate,endDate,details,children,isOpen,onToggle}) {
    return(
        <div className="border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800">
            <h2>
                <button
                type="button"
                    onClick={onToggle}
                    // THE KEY CHANGE IS HERE: We conditionally change the border and rounding.
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center gap-2">
                        <div
                        className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
                    >

                        <div className="-mt-2">
                        <span className="text-xs/none font-medium text-gray-700">{startDate}</span>
                         <span className="mx-2">-</span>
                         <span className="text-xs/none font-medium text-gray-700">{endDate}</span>

                        <h3 className="text-lg font-bold text-gray-900">#{projectId}-{projectName}</h3>

                        <p className="mt-0.5 text-sm text-gray-700">
                            {details}
                        </p>
                        </div>
                    </div>

                            <div aria-hidden="true"></div>
                        <svg
                            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                            />
                        </svg>

                    </div>

                </button>
            </h2>
             {isOpen && (
                <div>
                 <div className="p-5 border-t border-gray-200 dark:border-gray-700">
                    {children}
                </div>
                </div>
            )}
        </div>
    );
}

export default Card;