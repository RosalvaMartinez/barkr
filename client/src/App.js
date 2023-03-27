import Signup from './pages/Signup.js';
import Layout from './components/Layout.js';
import Login from './pages/Login.js';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AddDog from './pages/AddDog.js';
import SignupForm from './components/SignupForm.js';


function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Layout >
          <Signup />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
