import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageNav from "../components/PageNav";

function AddUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/add-user", formData)
      .then((response) => {
        console.log("User added: ", response.data);
        navigate("/", { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <PageNav />
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h1 className="text-2xl font-bold mb-4">Add User</h1>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input input-bordered w-full mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input input-bordered w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="input input-bordered w-full mb-4"
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="input input-bordered w-full mb-4"
        />
        <button type="submit" className="btn btn-primary w-full">
          Add User
        </button>
      </form>
    </>
  );
}

export default AddUser;
