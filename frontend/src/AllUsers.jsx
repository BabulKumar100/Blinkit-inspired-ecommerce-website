import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://blinkit-backend.onrender.com/api/auth/all-users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>All Registered Users</h2>
      {users.length === 0 ? <p>No users</p> : (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllUsers;

