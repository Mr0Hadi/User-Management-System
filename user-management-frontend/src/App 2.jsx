import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const UsersList = lazy(() => import("./pages/UsersList"));
const AddUser = lazy(() => import("./pages/AddUser"));
const EditUser = lazy(() => import("./pages/EditUser"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
