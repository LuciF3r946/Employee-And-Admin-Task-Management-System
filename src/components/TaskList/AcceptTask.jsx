import React from 'react';

/**
 * AcceptTask Component - Displays a task card with action buttons
 * @param {Object} props - Component props
 * @param {Object} props.data - Task data containing:
 *   @property {string} category - Task category
 *   @property {string} date - Task due date
 *   @property {string} title - Task title
 *   @property {string} description - Task description
 * @returns {JSX.Element} Task card component
 */
const AcceptTask = ({ data }) => {
    return (
        // Main Task Card Container
        <div className="w-[300px] h-[40vh] bg-white border border-blue-300 rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col">
            
            {/* Task Header Section - Contains category and date */}
            <div className="flex items-center justify-between p-0.5">
                {/* Category Badge */}
                <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full w-fit">
                    {data.category}
                </span>
                
                {/* Due Date */}
                <h4 className="text-sm text-gray-500">
                    Date:{' '}
                    <span className="text-black font-medium">{data.date}</span>
                </h4>
            </div>

            {/* Task Title Section */}
            <h2 className="font-medium text-cyan-800 mt-4 text-xl leading-snug">
                {data.title}
            </h2>

            {/* Task Description Section - Uses flex-grow to fill available space */}
            <p className="text-black mt-2 text-sm flex-grow overflow-hidden">
                {data.description}
            </p>

            {/* Action Buttons Section - Fixed at bottom with border separator */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-blue-100">
                {/* Complete Task Button */}
                <button 
                    className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white font-medium rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-1"
                    onClick={() => console.log('Task marked as completed')} // TODO: Implement completion handler
                >
                    Mark as Completed
                </button>
                
                {/* Fail Task Button */}
                <button 
                    className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white font-medium rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                    onClick={() => console.log('Task marked as failed')} // TODO: Implement failure handler
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;