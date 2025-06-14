import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">Hello Tailwind + React + Parcel 🎉</h1>

        {/* Form */}
        <form className="bg-white p-4 rounded shadow mb-4">
          <input
            type="text"
            placeholder="Enter name"
            className="p-2 border rounded w-full mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>

        {/* Table */}
        <div className="bg-white p-4 rounded shadow inline-block">
          <h2 className="text-2xl font-bold mb-2">User Table</h2>
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Denny</td>
                <td className="border border-gray-300 px-4 py-2">Visakhapatnam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
