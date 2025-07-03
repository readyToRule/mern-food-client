import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("Registering...");
    try {
      await API.post("/register", form);
      setMsg("Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Registration failed");
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
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2 mt-2">Register</h2>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
        />
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
        <button type="submit" className="py-2 rounded-lg bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition w-full">Register</button>
        <div className="text-center text-indigo-700 h-4">{msg}</div>
        <div className="text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-emerald-500 font-semibold hover:underline">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
