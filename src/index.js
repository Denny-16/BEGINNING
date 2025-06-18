import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

const App = () => {
  const [count, setCount] = useState(0); // ✅ React state

  const handleIncrementClick = () => {
    if(count < 10)
    {
    setCount(count + 1);
    }
  };

  const handleDecrementClick = () => {
    if(count > 0)
    {

    
    setCount(count - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 px-4">
      <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl shadow-lg mb-8">
        Welcome to our website
      </h1>

      <div className="space-x-4">
        <button
          onClick={handleIncrementClick}
          className="bg-green-500 hover:bg-green-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200"
        >
          Increment 
        </button>

        <button
          onClick={handleDecrementClick}
          className="bg-red-500 hover:bg-red-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200"
        >
          Decrement
        </button>
      </div>

      <h2 className="mt-8 text-6xl font-extrabold text-purple-700 drop-shadow-md bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl shadow-lg">
        {count}
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
