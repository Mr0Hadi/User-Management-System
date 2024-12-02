import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getUser/${id}`)
      .then((response) => {
        const { name, email, password, phone } = response.data;
        setFormData({
          name,
          email,
          password,
          phone,
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/users/${id}`, formData)
      .then(() => {
        console.log("User updated");
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
        <h1 className="text-2xl font-bold mb-4">Edit User</h1>
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
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="input input-bordered w-full mb-4"
        />
        <button type="submit" className="btn btn-primary w-full">
          Update User
        </button>
      </form>
    </>
  );
};

export default EditUser;
