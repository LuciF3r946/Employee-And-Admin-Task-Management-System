import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

/**
 * TaskList component - Renders different task cards based on their status
 * @param {Object} props - Component props
 * @param {Object} props.data - Contains tasks array
 */
const TaskList = ({ data }) => {
  // Safely get tasks array or default to empty array
  const tasks = data?.tasks || [];

  return (
    <div 
      id="tasklist" 
      className="w-full h-[50vh] bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-start overflow-x-auto gap-5 px-4 py-6 flex-nowrap"
    >
      {tasks.length > 0 ? (
        tasks.map((task, idx) => {
          // Render appropriate task component based on status
          if (task.active) {
            return <AcceptTask key={`accept-${idx}`} data={task} />;
          }
          if (task.NewTask || task.newTask) {  // Handle both property naming conventions
            return <NewTask key={`new-${idx}`} data={task} />;
          }
          if (task.completed) {
            return <CompleteTask key={`complete-${idx}`} data={task} />;
          }
          if (task.failed) {
            return <FailedTask key={`failed-${idx}`} data={task} />;
          }
          return null;
        })
      ) : (
        // Empty state
        <div className="w-full text-center text-gray-500">
          No tasks available
        </div>
      )}
    </div>
  );
};

export default TaskList;