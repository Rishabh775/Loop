import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./pages/Main.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Register = lazy(() => import("./pages/Register.tsx"));
const Error = lazy(() => import("./pages/Error.tsx"));
const Phone = lazy(() => import("./pages/Phone.tsx"));
const Forgot = lazy(() => import("./pages/Forgot.tsx"));

// import Footer from "./components/Footer.tsx";
// import Navbar from "./components/Navbar.tsx";

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
