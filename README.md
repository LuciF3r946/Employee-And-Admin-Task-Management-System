# Task Management Dashboard

A React-based task management dashboard with different views for admins and employees.

![Dashboard Preview](preview.png) *(Upload a preview image and name it preview.png)*

## Features

- **Role-based access**: Admin and employee views
- **Task status tracking**: New, Active, Completed, Failed
- **Responsive design**: Works on desktop and mobile
- **Local storage**: Data persists between sessions
- **Interactive UI**: Clean, modern interface

## Components Structure

src/
├── components/
│ ├── Auth/
│ │ └── Login.jsx
│ ├── Dashboard/
│ │ ├── AdminDashboard.jsx
│ │ └── EmployeeDashboard.jsx
│ └── TaskList/
│ ├── AcceptTask.jsx
│ ├── CompleteTask.jsx
│ ├── FailedTask.jsx
│ ├── NewTask.jsx
│ └── TaskList.jsx
├── context/
│ └── AuthProvider.jsx
├── utils/
│ └── localstorage.js
└── App.js

## Data Structure

Sample user data (stored in localStorage):

```javascript
{
  employees: [
    {
      id: 1,
      firstname: "Alex",
      email: "al@co.com",
      password: "143",
      taskStats: { active: 1, newTask: 1, completed: 0, failed: 0 },
      tasks: [
        {
          title: "Design Homepage",
          date: "2025-06-20",
          category: "Design",
          description: "Create a clean, responsive homepage layout.",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    }
  ],
  admin: [
    {
      id: 1,
      firstname: "Admin",
      email: "adm@co.com",
      password: "123"
    }
  ]
}
