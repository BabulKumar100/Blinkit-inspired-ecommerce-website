import React, {useState} from 'react';
import styles from './Forgot.module.css';
import { Link } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('https://blinkit-inspired-ecommerce-website.onrender.com/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email:email.toLowerCase()}),
    });

    const contentType = res.headers.get('content-type') || '';

    if (res.ok) {
      if (contentType.includes('application/json')) {
        const data = await res.json();
        console.log(data.message);
      }
      setSubmitted(true);
    } else {
      if (contentType.includes('application/json')) {
        const errorData = await res.json();
        alert(errorData.error || 'Something went wrong!');
      } else {
        alert('Unknown error occurred');
      }
    }
  } catch (err) {
    console.error('Network error:', err);
    alert('Failed to connect to server');
  }
};



  return (
    <div className={styles.forgotcontainer}>
      <form className={styles.forgotform} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor='Forgot Password'>Forgot Password</label>
      <input
       className={styles.input}
       type='email'
       placeholder='Enter Your registered email'
       id='Email'
       name='Email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required>

       </input>

      <button className={styles.submitButton} type="submit"> Send Reset Link</button>

      {submitted && (
        <p className={styles.successMessage}>
          A Password reset link has been sent to Your email.
        </p>
      )}

      <div className={styles.text}>
        Have You Get Password?  <Link to ="/Login" className={styles.link} >Login</Link>
       </div>
      </form>
   </div> 
  )
}

export default Forgot;
