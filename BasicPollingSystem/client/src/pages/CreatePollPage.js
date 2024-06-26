import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const CreatePollPage = () => {
  const [pollName, setPollName] = useState("");
  const [options, setOptions] = useState([]);
  const [forTeacher, setForTeacher] = useState(true);
  const [forStudent, setForStudent] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
      alert("Please login!");
      return;
    }
  }, [navigate]);

  // Handle option text change
  const handleOptionChange = (id, value) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, text: value } : option
      )
    );
  };

  // Add a new option
  const addOption = () => {
    setOptions((prevOptions) => [...prevOptions, { id: Date.now(), text: "" }]);
  };

  // Create poll
  const handleCreatePoll = async () => {
    if (!pollName || options.length === 0) {
      alert("Poll Name and Options are required!");
      return;
    }

    if (!forTeacher && !forStudent) {
      alert("No role selected! Please select at least one role.");
      return;
    }

    const optionsObject = options.reduce((acc, option) => {
      acc[option.text] = 0;
      return acc;
    }, {});

    try {
      const response = await axios.post("/api/poll/create", {
        name: pollName,
        options: optionsObject,
        forTeacher: forTeacher ? 1 : 0,
        forStudent: forStudent ? 1 : 0,
      });

      if (response.status === 200) {
        alert("Poll created successfully!");
        navigate(-1);
      }
    } catch (error) {
      alert("Error occurred!");
      console.error("Error creating poll", error);
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Create Poll</h1>
      <div className="mb-4">
        <label
          htmlFor="pollName"
          className="block text-sm font-medium text-gray-700"
        >
          Poll Name
        </label>
        <input
          type="text"
          id="pollName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={pollName}
          onChange={(e) => setPollName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Options
        </label>
        {options.map((option) => (
          <div key={option.id} className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Option"
              value={option.text}
              onChange={(e) => handleOptionChange(option.id, e.target.value)}
              className="mr-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        ))}
        <button
          onClick={addOption}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Option
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          For Teacher
        </label>
        <input
          type="checkbox"
          checked={forTeacher}
          onChange={(e) => setForTeacher(e.target.checked)}
          className="mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          For Student
        </label>
        <input
          type="checkbox"
          checked={forStudent}
          onChange={(e) => setForStudent(e.target.checked)}
          className="mt-1"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          onClick={handleCreatePoll}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Poll
        </button>
      </div>
    </div>
  );
};
