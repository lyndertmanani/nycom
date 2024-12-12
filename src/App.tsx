import { useState, useEffect } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
} from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import BaseLayout from "./layouts/base";
import Home from "./pages/home";
import NominationForm from "./pages/nomination";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

// Protected Route Component
const ProtectedRoute = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    // Optional: Add a loading spinner or placeholder
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        {/* Public Routes */}
        <Route index element={<Login />} />
        <Route path="Signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="nomination/:id" element={<NominationForm />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;