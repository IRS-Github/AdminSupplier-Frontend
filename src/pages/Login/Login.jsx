import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/features/userSlice";

const LoginMain = () => {
  /// initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /// local state
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  /// handlers
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    try {
      if (!form.userName) {
        throw new Error("Please enter user name");
      }
      if (!form.password) {
        throw new Error("Please enter Password");
      }

      dispatch(
        setCredentials({ userName: form.userName, password: form.password })
      );

      toast.success("Login successful");
      setForm({ userName: "", password: "" });
      navigate("/");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };
  return (
    <div className="bg-[#f2e9f5] w-full h-full flex flex-col justify-center items-center gap-[20px] md:gap-[80px] ">
      <div className="shadow-black shadow-sm rounded-xl p-4 m-1">
        <h1 className="text-[#5b336d]  text-2xl md:text-5xl">
          Welcome to Admin Supplier Portal
        </h1>
      </div>
      <div className="bg-[#502e5e] rounded-lg  border-sky-500 p-10 shadow-gray shadow-xl flex-col justify-center items-center m-2 ">
        <h1 className="text-white  text-3xl font-semibold mt-4 mb-4">LOGIN</h1>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className=" flex flex-col items-start gap-2">
            <h3 className="text-white font-300">User Name</h3>
            <input
              className="h-10 w-[350px] rounded-lg p-2"
              placeholder="Enter Your User Name"
              name="userName"
              value={form.userName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-white font-300">Password</h3>
            <input
              type="password"
              className="h-10 w-[350px] rounded-lg p-2"
              placeholder="Enter Your User Name"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Forgot Password</button>
          </div>
          <div className="w-[350px] h-10 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-[#f2e9f5]  rounded-lg text-[#5e3470] text-xl w-[100%] text-center hover:shadow-gray hover:shadow-xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
