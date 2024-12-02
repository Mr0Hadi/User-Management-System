import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";

const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        console.log(`User with ID ${id} deleted`);
        fetchUsers();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <PageNav />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
            >
              <span>
                {user.name} - {user.email}
              </span>
              <div className="flex space-x-2">
                <button
                  className="btn btn-info"
                  onClick={() => navigate(`/edit-user/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UsersList;
