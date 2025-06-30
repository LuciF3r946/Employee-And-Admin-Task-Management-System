import React from 'react';

const CompleteTask = ({ data }) => {
    return (
        // Task card container with fixed dimensions and flex layout
        <div className="w-[300px] h-[40vh] bg-white border border-blue-300 rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col">
            {/* Category and date row */}
            <div className="flex items-center justify-between p-0.5">
                <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full w-fit">
                    {data.category}
                </span>
                <h4 className="text-sm text-gray-500">
                    Date: <span className="text-black font-medium">{data.date}</span>
                </h4>
            </div>

            {/* Task title */}
            <h2 className="font-medium text-cyan-800 mt-4 text-xl leading-snug">
                {data.title}
            </h2>

            {/* Task description with scroll overflow */}
            <p className="text-black mt-2 text-sm flex-grow overflow-hidden">
                {data.description}
            </p>

            {/* Action button container */}
            <div className="flex mt-auto pt-4 border-t border-blue-100">
                <button className="w-full h-full px-4 py-3.5 bg-gradient-to-r from-red-400 to-blue-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1">
                    Complete Task
                </button>
            </div>
        </div>
    );
};

export default CompleteTask;