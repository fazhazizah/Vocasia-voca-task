// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../App.css"
const MainTask = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const handleMarkDone = (taskIndex) => {
    const doneTask = tasks[taskIndex];
    setCompletedTasks([...completedTasks, doneTask]);
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const handleDeleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex p-8 space-x-8">
      <div className="bg-gray-800 w-1/4 p-6 rounded-lg flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-4xl text-white mb-4">
          <span>👤</span>
        </div>
        <h2 className="text-lg font-semibold text-center">
          Welcome Back, <span className="text-purple-400">{email || 'User'}</span>!
        </h2>
        <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg mt-2 hover:bg-gray-600"
        onClick={()=> navigate('/profile', {state: {email}})}
        >
          Edit Profile
        </button>
        <button 
        onClick={()=> navigate('/')}
        className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700">
          Sign Out
        </button>
      </div>

      <div className="bg-gray-800 w-3/4 p-8 rounded-lg">
        <div className="flex items-center space-x-2 mb-6 bg-gray-900 p-4 rounded-lg">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700 text-white text-2xl"
          >
            +
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Tasks to do - {tasks.length}</h3>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 mb-2 rounded-lg flex justify-between items-center"
            >
              <span className="text-gray-200">{task}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleMarkDone(index)}
                  className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-700"
                >
                  ✓
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Done - {completedTasks.length}</h3>
          {completedTasks.map((task, index) => (
            <div key={index} className="bg-gray-700 p-4 mb-2 rounded-lg text-gray-400 line-through">
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainTask;
