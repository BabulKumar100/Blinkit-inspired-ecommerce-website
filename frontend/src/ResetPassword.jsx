import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("https://blinkit-inspired-ecommerce-application-7.onrender.com/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token, newPassword })
    });

    const data = await res.json();
    
    if (!res.ok) {
      setMessage(data.error || "Something went wrong.");
    } else {
      setMessage(data.message || "Password reset successful.");
    }

    console.log("Response:", data); 

  } catch (err) {
    console.error("Fetch error:", err); 
    setMessage("Something went wrong (frontend).");
  }
};


  return (
    <div className={styles.PasswordContainer}>
      <h2 className={styles.heading}>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button className={styles.button}type="submit">Reset Password</button>
      </form>
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
};

export default ResetPassword;
