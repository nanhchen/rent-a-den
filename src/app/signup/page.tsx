"use client";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill, RiPencilFill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="font-bold text-xl mb-8">SIGN UP</p>
      <div className="flex items-center gap-2 border-b-1 mb-6 py-1">
        <RiPencilFill className="opacity-50" />
        <input placeholder="Display Name" className="focus:outline-none" />
      </div>
      <div className="flex items-center gap-2 border-b-1 mb-6 py-1">
        <FaUser className="opacity-50" />
        <input placeholder="Username" className="focus:outline-none" />
      </div>
      <div className="flex items-center gap-2 border-b-1 mb-10 py-1">
        <RiLockPasswordFill className="opacity-50" />
        <input placeholder="Password" className="focus:outline-none" />
      </div>

      <div className="relative mb-10 hover:cursor-pointer">
        <div
          onClick={() => setDropdown(!dropdown)}
          className="mb-2 rounded-md shadow-lg px-4 py-1 flex items-center gap-2"
        >
          <p>Leasing or Renting?</p>
          <IoChevronDown />
        </div>
        {dropdown && (
          <div className="rounded-md absolute bg-white w-full py-2 px-2 shadow-lg">
            <p className="py-1 px-2 rounded-md hover:bg-rad-blue-200/10">
              Leasing
            </p>
            <p className="py-1 px-2 rounded-md hover:bg-rad-blue-200/10">
              Renting
            </p>
          </div>
        )}
      </div>

      <p className="mb-10">
        Already have an account?{" "}
        <Link href="/signup" className="ml-4 font-bold text-rad-blue-100">
          Login here
        </Link>
      </p>
      <button className="px-12 py-2 rounded-sm bg-rad-blue-100 text-white font-bold">
        SIGN UP
      </button>
    </div>
  );
};

export default Signup;
