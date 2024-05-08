import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

try {    
 
  setIsLoggedIn(true);
} catch (error) {
  console.error('Error:', error);
  setError('Something went wrong');
}
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, {email}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;