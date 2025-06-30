import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  const [allEmployees, setAllEmployees] = useState(authData.employees || []);
  const [refreshKey, setRefreshKey] = useState(0);

  /**
   * Effect to handle data synchronization:
   * - Listens for storage events
   * - Implements polling fallback
   */
  useEffect(() => {
    const handleStorageChange = () => {
      setAllEmployees(authData.employees || []);
      setRefreshKey(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Fallback polling mechanism (2 second interval)
    const interval = setInterval(() => {
      setAllEmployees(authData.employees || []);
    }, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [authData.employees]);

  /**
   * Determines the status text for a task
   * @param {Object} task - The task object
   * @returns {string} Status text
   */
  const getStatus = (task) => {
    if (task.completed) return 'Completed';
    if (task.active) return 'In Progress';
    if (task.failed) return 'Pending';
    return 'Not Started';
  };

  /**
   * Returns Tailwind classes for different task statuses
   * @param {string} status - Task status
   * @returns {string} Tailwind class string
   */
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6" key={refreshKey}>
      {allEmployees.flatMap((employee) =>
        (employee.tasks || []).map((task, index) => (
          <div
            key={`${employee.id}-${index}-${refreshKey}`}
            className="bg-white border border-cyan-100 rounded-2xl shadow-lg p-6 transition hover:shadow-xl overflow-auto"
          >
            <div className="mb-2 text-sm text-gray-500">
              Assigned to: {employee.firstname}
            </div>
            
            <div className="text-lg font-semibold text-blue-950">
              {task.title}
            </div>
            
            <div
              className={`inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full ${
                getStatusStyle(getStatus(task))
              }`}
            >
              {getStatus(task)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;