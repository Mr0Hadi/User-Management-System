import { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        setToken(response.data.token);
        console.log("Login successful");
      })
      .catch((error) => console.error("Login failed:", error.response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
