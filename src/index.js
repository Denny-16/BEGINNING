import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white">Hello Tailwind + React + Parcel 🎉</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
