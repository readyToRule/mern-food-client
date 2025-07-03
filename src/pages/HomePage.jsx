import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CUISINES = [
  {
    key: "south",
    label: "South Indian",
    image: "https://img.freepik.com/free-photo/idli-sambar-vada-traditional-south-indian-food_466689-75193.jpg", // replace with your image
    bg: "from-orange-300 to-yellow-300"
  },
  {
    key: "north",
    label: "North Indian",
    image: "https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-dark-background_1150-44317.jpg", // replace with your image
    bg: "from-red-300 to-yellow-200"
  }
];

const MEALS = [
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" }
];

const HomePage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // For demo, show user's name if you store it in localStorage after login
  // Otherwise, just greet "Welcome!"
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
    setShowDropdown(true);
  };

  const handleMealSelect = (meal) => {
    // Pass selected cuisine and meal in navigation or as query params, as needed
    navigate(`/menu?cuisine=${selectedCuisine.key}&meal=${meal.key}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-100 via-blue-100 to-emerald-100">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow">
          Welcome{user && user.name ? `, ${user.name}` : ""}!
        </h1>
        <p className="text-gray-500 text-lg mt-2">Choose your favorite cuisine:</p>
      </header>

      {/* Cuisine Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
        {CUISINES.map((cuisine) => (
          <button
            key={cuisine.key}
            onClick={() => handleCuisineSelect(cuisine)}
            className={`group w-72 h-64 bg-gradient-to-br ${cuisine.bg} rounded-3xl shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden`}
          >
            <img
              src={cuisine.image}
              alt={cuisine.label}
              className="w-36 h-36 object-cover rounded-full shadow-lg border-4 border-white group-hover:scale-110 transition"
            />
            <div className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-indigo-800">{cuisine.label}</div>
          </button>
        ))}
      </div>

      {/* Dropdown */}
      {showDropdown && selectedCuisine && (
        <div className="flex flex-col items-center mt-8 animate-fade-in">
          <div className="mb-2 text-xl font-semibold text-indigo-700">
            Select Meal Type for <span className="text-emerald-600">{selectedCuisine.label}</span>:
          </div>
          <div className="flex gap-6">
            {MEALS.map((meal) => (
              <button
                key={meal.key}
                onClick={() => handleMealSelect(meal)}
                className="px-8 py-3 rounded-full bg-white text-indigo-600 font-bold shadow-md hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
              >
                {meal.label}
              </button>
            ))}
            <button
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-600 font-medium ml-4 hover:bg-gray-300 transition"
              onClick={() => setShowDropdown(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto text-center p-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Foodie Express. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
