import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Hello Tailwind + React + Parcel 🎉</h1>
        <form className="bg-white p-4 rounded shadow">
          <input type="text" placeholder="Enter name" className="p-2 border rounded w-full mb-2" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
