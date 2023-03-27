import SignupForm from './components/SignupForm.js';
import Layout from './components/Layout.js';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Layout >
          <SignupForm />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
