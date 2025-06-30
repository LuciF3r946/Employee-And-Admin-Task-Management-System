import React, { useContext, useEffect, useState } from 'react';
import Header from '../etc/Header';
import TaskListNo from '../etc/TaskListNo';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = ({ changeUser, data }) => {
  const { employees } = useContext(AuthContext);
  const [currentEmployee, setCurrentEmployee] = useState(data);
  // State to trigger component updates when localStorage changes
  const [storageChange, setStorageChange] = useState(0);

  /**
   * Listen for storage events to sync data across tabs
   */
  useEffect(() => {
    const handleStorageChange = () => {
      setStorageChange(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  /**
   * Update employee data when:
   * - Employees list changes
   * - Initial data prop changes
   * - Storage change detected
   */
  useEffect(() => {
    const updatedEmployee = employees.find(emp => emp.email === data.email) || data;
    setCurrentEmployee(updatedEmployee);
  }, [employees, data, storageChange]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 p-8">
      <Header
        changeUser={changeUser}
        data={currentEmployee}
      />

      <TaskListNo
        taskStats={currentEmployee.taskStats || {}}
      />

      <TaskList
        data={currentEmployee}
      />
    </div>
  );
};

export default EmployeeDashboard;