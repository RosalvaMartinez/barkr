import Signup from './pages/Signup.js';
import Layout from './components/Layout.js';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import DogProfile from './pages/DogProfile.js';
import AddDog from './pages/AddDog.js';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "addDog",
        element: <AddDog />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "dogProfile",
        element: <DogProfile />
      }
    ]
  }
]);

function App() {
  return (
    <div className="flex flex-col h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
