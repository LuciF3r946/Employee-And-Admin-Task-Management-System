import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const stored = localStorage.getItem('loggedInUser');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.role);
      if (parsed.role === 'employee') {
        setLoggedInUserData(parsed.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData) return;

    const isAdmin = authData.admin.find(
      (a) => email === a.email && password === a.password
    );
    if (isAdmin) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }

    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password
    );
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      );
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && (
        <EmployeeDashboard 
          changeUser={setUser} 
          data={loggedInUserData} 
        />
      )}
    </>
  );
};

export default App;