import React from 'react';

const TaskListNo = ({ taskStats = {} }) => {
  const statsDisplay = [
    { 
      count: taskStats.newTask || 0, 
      label: 'New Task', 
      color: 'text-cyan-600', 
      border: 'border-cyan-300' 
    },
    { 
      count: taskStats.completed || 0, 
      label: 'Completed', 
      color: 'text-green-600', 
      border: 'border-green-300' 
    },
    { 
      count: taskStats.active || 0, 
      label: 'Active', 
      color: 'text-blue-600', 
      border: 'border-blue-300' 
    },
    { 
      count: taskStats.failed || 0, 
      label: 'Failed', 
      color: 'text-red-600', 
      border: 'border-red-300' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {statsDisplay.map((item, index) => (
        <div
          key={index}
          className={`h-40 bg-white border ${item.border} rounded-xl shadow-md flex flex-col items-center justify-center`}
        >
          <h2 className={`text-4xl font-bold ${item.color}`}>
            {item.count}
          </h2>
          <h3 className="text-gray-700 text-lg mt-2">
            {item.label}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNo;