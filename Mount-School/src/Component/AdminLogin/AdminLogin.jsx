import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../AdminLogin/AdminLogin.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  useEffect(() => {
    localStorage.removeItem("isLoggedIn"); 
  }, []);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("defaultUser")) || 
                       { username: "Mlzs-3690", password: "Mlzs3690" };

    if (username === storedUser.username && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
      navigate("/admin-panel", { replace: true });  
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="AdminLogin-Page">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="Login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;


