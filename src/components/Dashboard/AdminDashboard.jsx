import React, { useState, useEffect } from 'react';
import Header from '../etc/Header';
import CreateTask from '../etc/CreateTask';
import Alltask from '../etc/Alltask';

const AdminDashboard = ({ changeUser }) => {
  // State to force re-renders when tasks are updated
  const [refreshKey, setRefreshKey] = useState(0);

  /**
   * Listen for localStorage changes to sync data across tabs
   */
  useEffect(() => {
    const handleStorageChange = () => {
      setRefreshKey(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="h-[100vh] bg-gradient-to-br from-cyan-50 to-blue-50 px-8 pt-8 pb-0">
      <Header changeUser={changeUser} />

      <div className="flex flex-col md:flex-row gap-8 mt-10">
        {/* Task Creation Panel */}
        <div className="w-full md:w-2/3 h-[78vh]">
          <CreateTask
            onTaskCreated={() => setRefreshKey(prev => prev + 1)}
          />
        </div>

        {/* Task List Panel */}
        <div
          id="tasklist2"
          className="w-full md:w-1/3 overflow-y-auto h-[78vh]"
        >
          <Alltask key={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;