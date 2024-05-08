 import React, { useState } from 'react';

const SignUp = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

if (password !== confirmPassword) {
  setError("Passwords don't match");
  return;
}

try {
  
  setIsSignedUp(true);
} catch (error) {
  console.error('Error:', error);
  setError('Something went wrong');
}
  };

  return (
    <div>
      {isSignedUp ? (
        <p>Sign up successful! You can now login.</p>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;