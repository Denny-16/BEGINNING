/*import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

const App = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("from-pink-200 via-purple-200 to-blue-200");

  const handleIncrementClick = () => {
    if (count < 10) {
      setCount(count + 1);
      setBgColor("from-green-100 via-green-300 to-green-500");
    }
  };

  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
      setBgColor("from-red-100 via-red-300 to-red-500");
    }
  };

  const handleYellowClick = () => {
    setBgColor("from-yellow-100 via-yellow-300 to-yellow-500");
  };

  const handleTealClick = () => {
    setBgColor("from-teal-100 via-teal-300 to-teal-500");
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-br ${bgColor} px-4 transition-all duration-500`}>
      <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl shadow-lg mb-8">
        Welcome to our website
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        <button
          onClick={handleYellowClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200"
        >
          Yellow
        </button>

        <button
          onClick={handleTealClick}
          className="bg-teal-500 hover:bg-teal-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200"
        >
          Teal
        </button>
      </div>

      <h2 className="mt-4 text-6xl font-extrabold text-purple-700 drop-shadow-md bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl shadow-lg">
        {count}
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);*/


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

const App = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("from-pink-200 via-purple-200 to-blue-200");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1️⃣ Run Once on Mount (componentDidMount)
  useEffect(() => {
    console.log("🟢 App Mounted");

    // Optional Cleanup (for demo)
    return () => {
      console.log("🔴 App Unmounted");
    };
  }, []);

  // 2️⃣ Run on `count` change
  useEffect(() => {
    console.log("🔁 Count changed to:", count);
  }, [count]);

  // 3️⃣ Run on Every Render
  useEffect(() => {
    console.log("🔄 App rendered or re-rendered");
  });

  // 4️⃣ Setup and Cleanup Event Listener (componentWillUnmount-style)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("🔧 Resize listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("❌ Resize listener removed");
    };
  }, []); // only on mount/unmount

  const handleIncrementClick = () => {
    if (count < 10) {
      setCount(count + 1);
      setBgColor("from-green-100 via-green-300 to-green-500");
    }
  };

  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
      setBgColor("from-red-100 via-red-300 to-red-500");
    }
  };

  const handleYellowClick = () => {
    setBgColor("from-yellow-100 via-yellow-300 to-yellow-500");
  };

  const handleTealClick = () => {
    setBgColor("from-teal-100 via-teal-300 to-teal-500");
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-br ${bgColor} px-4 transition-all duration-500`}>
      <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl shadow-lg mb-8">
        Welcome to our website
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button onClick={handleIncrementClick} className="bg-green-500 hover:bg-green-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200">
          Increment
        </button>

        <button onClick={handleDecrementClick} className="bg-red-500 hover:bg-red-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200">
          Decrement
        </button>

        <button onClick={handleYellowClick} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200">
          Yellow
        </button>

        <button onClick={handleTealClick} className="bg-teal-500 hover:bg-teal-600 text-white text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-200">
          Teal
        </button>
      </div>

      <h2 className="mt-4 text-6xl font-extrabold text-purple-700 drop-shadow-md bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl shadow-lg">
        {count}
      </h2>

      <p className="mt-6 text-lg text-gray-700">🖥️ Window Width: {windowWidth}px</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

