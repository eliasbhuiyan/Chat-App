import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
const Registratin = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handelSignUp = () => {
    if (!userData.fullName) {
      return toast.error("FullName is required");
    }
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: userData.fullName,
          photoURL: "/placeholderUser.webp",
        })
          .then(() => {
            toast.success("Registration successsfully");
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("A valid email is required!");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Password is required!");
        }
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        }
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in used!");
        }
      });
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="relative px-4 py-10 max-w-sm sm:mx-auto bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-center font-semibold text-xl">Registration</h2>
          <div className="mt-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, fullName: e.target.value })
              }
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="fullname"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="login"
            >
              E-mail
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              id="login"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              id="password"
            />
          </div>
          <div className="mb-5">
            <button
              onClick={handelSignUp}
              className="py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center w-full items-center">
            <div>
              <button className="flex gap-3 items-center justify-center py-2 px-10 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                <FcGoogle />
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <Link
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              to="/login"
            >
              or sign in
            </Link>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registratin;
