import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    assignTo: '',
    category: ''
  });
  const [newTask, setNewTask] = useState({});

  // Debug effect
  useEffect(() => {
    console.log("Updated Task:", newTask);
  }, [newTask]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      category: formData.category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    setNewTask(task);

    try {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];

      const updatedEmployees = employees.map(employee => {
        if (employee.firstname === formData.assignTo) {
          // Update taskStats safely
          const updatedStats = {
            ...employee.taskStats,
            newTask: (employee.taskStats?.newTask || 0) + 1
          };

          return {
            ...employee,
            tasks: [...(employee.tasks || []), task],
            taskStats: updatedStats
          };
        }
        return employee;
      });

      localStorage.setItem('employees', JSON.stringify(updatedEmployees));

      setFormData({
        title: '',
        description: '',
        date: '',
        assignTo: '',
        category: ''
      });

      window.location.reload();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div
      className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-cyan-100 flex flex-col"
      style={{ height: '78vh' }}
    >
      <h2 className="text-2xl font-bold text-cyan-800 mb-6">
        Create New Task
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9 pr-2">
        {/* Task Title */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Task Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="E.g. Fix navbar issue"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Assign To */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Assign To
          </label>
          <input
            type="text"
            name="assignTo"
            placeholder="Employee name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            value={formData.assignTo}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Due Date */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-700 transition"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Design / Development"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Describe the task in detail..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end pt-2 pb-4">
          <button
            type="submit"
            className="bg-cyan-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;