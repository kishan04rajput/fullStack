/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ADashBoard = () => {
  const [data, setData] = useState([]);
  const { email } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPollData = async () => {
      try {
        const response = await axios.get(
          `/api/poll/getPollsByIEmail/${email}`,
          {
            headers: {
              "Cache-Control": "no-cache",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching poll data:", error);
      }
    };

    if (email) {
      fetchPollData();
    }

    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
      alert("Please login!");
      return;
    }
  }, [email]);

  const handleDeletePoll = async (pollId) => {
    try {
      await axios.delete(`/api/poll/${pollId}`);
      setData(data.filter((poll) => poll.id !== pollId));
    } catch (error) {
      console.error(`Error deleting poll with ID ${pollId}`, error);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    console.log("Logged out");
    navigate("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/createPoll"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Create Poll
        </Link>
        <div>
          <Link
            to={`/profile/${email}?role=institute`}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4 transition duration-300"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Institute Name</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Options</th>
                <th className="px-4 py-2 border">For Teacher</th>
                <th className="px-4 py-2 border">Total Teachers</th>
                <th className="px-4 py-2 border">For Student</th>
                <th className="px-4 py-2 border">Total Students</th>
                <th className="px-4 py-2 border">Win</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{item.id}</td>
                  <td className="px-4 py-2 border">{item.institutename}</td>
                  <td className="px-4 py-2 border">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">
                    {item.options &&
                      Object.entries(item.options).map(([option, value]) => (
                        <div key={option}>{`${option}: ${value}`}</div>
                      ))}
                  </td>
                  <td className="px-4 py-2 border">{item.forTeacher}</td>
                  <td className="px-4 py-2 border">{item.totalTeacher}</td>
                  <td className="px-4 py-2 border">{item.forStudent}</td>
                  <td className="px-4 py-2 border">{item.totalStudent}</td>
                  <td className="px-4 py-2 border">
                    {item.win.length > 0 ? item.win : `N/A`}
                  </td>
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleDeletePoll(item.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Please Create Polls!
        </h1>
      )}
    </div>
  );
};
