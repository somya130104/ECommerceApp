import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Log In");
  /*const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          `${backendUrl}` + "/api/user/register",
          {
            name,
            email,
            password,
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };*/
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Backend URL:", backendUrl);
    try {
      const payload =
        currentState === "Sign Up"
          ? { name, email, password }
          : { email, password };

      const endpoint =
        currentState === "Sign Up" ? "/api/user/register" : "/api/user/login";

      const response = await axios.post(`${backendUrl}${endpoint}`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        setToken(response.data.token);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"></hr>
      </div>
      {currentState === "Log In" ? (
        " "
      ) : (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Full Name"
          required
        />
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="E-Mail"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Log In" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create an account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Log In")}
            className="cursor-pointer"
          >
            Already have an account?
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Log In" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
