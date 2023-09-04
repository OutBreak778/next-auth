import Link from "next/link";
import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, googleSignOut } = userAuth();
  const [loading, setLoading] = useState(true)

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log(err);
    }
  };


    useEffect(() => {
        const CheckAuth = async() => {
            await new Promise((resolve) => setTimeout(resolve,50))
            setLoading(false)
        }
        CheckAuth()
    },[user])


  return (
    <div className=" h-20 w-full border-b-2 flex items-center justify-between p-3">
      <ul className="flex justify-between">
        <div className="flex justify-between items-center">
          <nav className="flex justify-center space-x-2">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Profile", "/profile"],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="rounded-lg px-2 py-3 text-slate-600 font-medium hover:bg-slate-700 hover:text-slate-200"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </ul>

      {loading ? null : !user ? (
        <div className="flex justify-between items-center">
          <ul className="flex">
            <li className="p-2 cursor-pointer" onClick={handleSignIn}>
              Login
            </li>
            <li className="p-2 cursor-pointer" onClick={handleSignOut}>
              Logout
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <ul className="flex">
            <li className="p-2 cursor-pointer">Welcome {user.displayName}</li>
            <li className="p-2 cursor-pointer" onClick={handleSignOut}>
              Logout
            </li>
          </ul>
        </div>
      )}

      {/* <div className="flex justify-between items-center">
        <ul className="flex">
          <li className="p-2 cursor-pointer" onClick={handleSignIn}>Login</li>
          <li className="p-2 cursor-pointer"  onClick={handleSignOut}>Logout</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
