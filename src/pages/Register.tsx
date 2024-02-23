import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen pt-8 bg-[url('./assets/images/loginBg.jpg')] bg-cover">
        <div className=" max-w-xl mx-auto py-20 px-20 bg-[#67656536] shadow-[0px_2px_5px_#ffffff91] filter backdrop-blur-[6px] rounded-xl ">
          <header className=" text-center">
            <h2 className="font-bold text-4xl text-white">Join the Party</h2>
            <p className="text-gray-100">Where Music Finds you</p>
          </header>
          <form
            action=""
            className=" flex flex-col gap-2 items-center py-4 text-white"
          >
            <input
              type="email"
              className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
              placeholder="email"
            />
            <input
              type="text"
              className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
              placeholder="username"
            />
            <input
              type="password"
              className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
              placeholder="password"
            />
            <input
              type="password"
              className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
              placeholder="confirm password"
            />
            <div className=" flex justify-between text-sm gap-16">
              <p>
                <input type="checkbox" />
                terms
              </p>
              <Link to={"/phone"} className=" hover:text-rose-400">
                using phone
              </Link>
            </div>
            <div>
              <button className=" bg-teal-500 px-4 mt-3 py-3 w-40 rounded-lg hover:bg-teal-600 duration-300">
                Register
              </button>
            </div>
          </form>
          <p className=" text-center text-white">
            Already in the Cult ?{" "}
            <Link to="/login" className=" text-rose-200 hover:text-rose-300">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
