import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("Logging in...");
    try {
      const res = await API.post("/login", form);
      localStorage.setItem("token", res.data.token);
     
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setMsg("Login successful! Redirecting...");
      setTimeout(() => navigate("/home"), 1200);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 via-cyan-500 to-indigo-700">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md space-y-5 animate-fade-in relative">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute left-4 top-4 text-emerald-500 font-semibold hover:underline hover:text-emerald-700 transition"
        >
          ← Back to Landing
        </button>
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2 mt-2">Login</h2>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
        />
        <input
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          type="password"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
        />
        <button type="submit" className="py-2 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition w-full">Login</button>
        <div className="text-center text-emerald-500 h-4">{msg}</div>
        <div className="text-center">
          <span>Don’t have an account? </span>
          <Link to="/register" className="text-emerald-500 font-semibold hover:underline">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
