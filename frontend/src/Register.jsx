import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = (props) => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const res = await fetch('https://blinkit-inspired-ecommerce-application-8.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email.toLowerCase(), 
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
   
      alert(data.error || 'Registration failed.');
    } else {
      alert(data.message || 'Registration successful!');
     
      window.location.href = '/Login';
    }

  } catch (error) {
    console.error('Registration error:', error);
    alert('Something went wrong. Please try again later.');
  }
};

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.title}>Welcome to Blinkit</div>

        <label className={styles.label} htmlFor="name">Name</label>
        <input
          className={styles.input}
          type='text'
          placeholder='Enter Your Name'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={styles.input}
          type='email'
          placeholder='Enter Your Email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor="password">Password</label>
        <input
          className={styles.input}
          type='password'
          placeholder='Enter Your Password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={styles.input}
          type='password'
          placeholder='Confirm Your Password'
          id='confirmPassword'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className={styles.registerButton}>Register</button>

        <div className={styles.loginText}>
          Already have an account?{' '}
          <Link to="/Login" className={styles.link} style={{ textDecoration: "none" }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
