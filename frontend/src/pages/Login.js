import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:5000/validate-login', { // Replace with your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); // Parse the response data
      if(data == "Invalid"){
        alert("User not exist");
      } else{
        document.cookie = 'userLogged=true; path=/';
        window.location.replace("/weather-report")
      }
    } catch (error) {
    }
  };
  return (
    <div className="container">
  <div className="row justify-content-center mt-5">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          Login
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} name='password'  id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;