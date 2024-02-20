import { useState } from 'react';

//
const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  console.log('isLoggedIn ===', isLoggedIn);
  return (
    <div>
      <h2>LoggedIn</h2>
      <button className='btn btn-secondary me-2' onClick={handleLogin}>
        Login
      </button>
      <button className='btn btn-primary' onClick={handleLogout}>
        Logout
      </button>
      <h2>User is logged {isLoggedIn ? 'in' : 'out'} </h2>
    </div>
  );
};

export default LoggedIn;
