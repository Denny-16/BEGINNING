import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

const App = () => {
  const handleIncrementClick = () => {
    console.log("Increment clicked");
  };

  const handleDecrementClick = () => {
    console.log("Decrement clicked");
  };

  return (
    <>
      <div className="bg-amber-50 text-amber-300 p-4 flex flex-col items-center justify-center">
        <h1>Welcome to our website</h1>
        <button onClick={handleIncrementClick} className = "bg-white-500 hover:bg-sky-700 text-2xl text-center">Increment</button>
        <button onClick={handleDecrementClick} className = "bg-white-500 hover:bg-sky-700 text-2xl text-center">Decrement</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
