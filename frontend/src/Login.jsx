import React, {useState} from 'react';
import styles from './Login.module.css';
import {Link, useNavigate} from 'react-router-dom';

const Login = ({onLoginSuccess,setIsLoggedIn}) => {
  const[email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  const navigate= useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email:email.toLowerCase(),password}),
    });

    const data = await res.json();

    if(res.ok) {
      localStorage.setItem('userEmail',email);
      localStorage.setItem('userName', data.user.name);

      
      if (onLoginSuccess) {
        onLoginSuccess();
    } else {
       navigate('/');
    }
  
    } else {
      alert(`Error: ${data?.error || 'Login failed'}`);

    } 
  } catch (err) {
      console.error("Login error:",err);
      alert("Server error.Try again later.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <label className={styles.label} htmlFor="Email">Email</label>
        <input
        className={styles.input}
        type='email'
        placeholder='Enter Your Email'
        id='Email'
        name='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required>
        </input>

        <label className={styles.label} htmlFor="Password">Password</label>
        <input
         className={styles.input}
        type='password'
        id='Password'
        name='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Your Password'
         required>

         </input>
        
        <Link to ="/forgot" className={styles.forgetPassword} style={{textDecoration:"none"}}>
        <div className={styles.forgotPassword}>
          Forgot Password ?
           </div>
         </Link>

        <button className={styles.submitButton}>Login</button>

        <div className={styles.RegistrationText}>Don't have account?<Link to = "/Register" className={styles.link} style={{textDecoration:"none"}}>Register</Link></div>
      </form>
    </div>
  )
}

export default Login;
