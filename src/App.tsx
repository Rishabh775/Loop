import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./pages/Main.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));
const Phone = lazy(() => import("./pages/Phone.jsx"));
const Forgot = lazy(() => import("./pages/Forgot.jsx"));

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/forgot-password" element={<Forgot />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </Suspense>
    </>
  );
};

export default App;
