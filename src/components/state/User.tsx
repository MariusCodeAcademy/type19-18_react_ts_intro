import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};
//
const User = () => {
  // user ateities reiksme bus AuthUser bet kol jos nera tai null
  const [user, setUser] = useState<AuthUser | null>(null);
  // const [user, setUser] = useState(null as AuthUser | null);

  const handleLogin = () => {
    setUser({
      name: 'James',
      email: 'James@bond.com',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h2>LoggedIn</h2>
      <button className='btn btn-secondary me-2' onClick={handleLogin}>
        Login
      </button>
      <button className='btn btn-info me-2' onClick={handleLogout}>
        Logout
      </button>

      <div className='card'>
        <div className='card-body'>
          <h2>User name is {user?.name}</h2>
          <h2>User email is {user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default User;
