import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './pages/UsersList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Login from './pages/Login';

function App() {
  const [token, setToken] = useState('');

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList token={token} />} />
        <Route path="/add-user" element={<AddUser token={token} />} />
        <Route path="/edit-user/:id" element={<EditUser token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
