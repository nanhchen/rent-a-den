import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-xl mb-8">SIGN IN</p>
      <div className="flex items-center gap-2 border-b-1 mb-6 py-1">
        <FaUser className="opacity-50" />
        <input placeholder="Username" className="focus:outline-none" />
      </div>
      <div className="flex items-center gap-2 border-b-1 mb-10 py-1">
        <RiLockPasswordFill className="opacity-50" />
        <input placeholder="Password" className="focus:outline-none" />
      </div>

      <p className="mb-10">
        Don't have an account?{" "}
        <span className="ml-4 font-bold text-rad-blue-100">Register here</span>
      </p>
      <button className="px-12 py-2 rounded-sm bg-rad-blue-100 text-white font-bold">
        LOG IN
      </button>
    </div>
  );
};

export default Login;
