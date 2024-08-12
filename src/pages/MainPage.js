import React, { useState } from 'react';
import Header from '../components/Header'; // Import the Header component
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text); // Set the current text for editing
  };

  const saveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editText } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      saveEdit(index);
    }
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ||
    (filter === 'active' && !task.completed) ||
    (filter === 'completed' && task.completed)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* Include the Header component */}
      <main className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md mt-4">
        <div className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Add a new task..."
          />
          <button
            onClick={addTask}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          >
            Add Task
          </button>
        </div>

        <div className="mb-4">
          <div className="flex justify-around border-b">
            <button
              onClick={() => setFilter('all')}
              className={`py-2 px-4 w-full text-center ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`py-2 px-4 w-full text-center ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`py-2 px-4 w-full text-center ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Completed
            </button>
          </div>
        </div>

        <div>
          {filteredTasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-md shadow-md mb-2">
              <div className="flex items-center">
                <button
                  onClick={() => toggleComplete(index)}
                  className={`mr-4 ${task.completed ? 'text-green-500' : 'text-gray-500'}`}
                >
                  <FaCheck />
                </button>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="p-2 border border-gray-300 rounded-md"
                    autoFocus
                  />
                ) : (
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                  </span>
                )}
              </div>
              <div className="flex items-center">
                {editIndex === index ? (
                  <button
                    onClick={() => saveEdit(index)}
                    className="text-green-500 mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(index)}
                    className="text-yellow-500 mr-2"
                  >
                    <FaEdit />
                  </button>
                )}
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
