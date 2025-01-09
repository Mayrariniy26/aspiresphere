import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLogin = () => {
    alert("Login Successful!"); // Simulate successful login
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
