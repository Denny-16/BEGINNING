import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">User Table</h1>
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
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
