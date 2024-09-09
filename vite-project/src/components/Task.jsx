import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    status: 'pending',
    project: '',
    assignedTo: ''
  });

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);


  // Fetch Tasks, Users, and Projects
  useEffect(() => {
    fetchTasks();
    fetchUsers();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      console.log(response.data); // Ensure that this logs an array
      setTasks(response.data); 
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  

  const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    setUsers(response.data);
  };

  const fetchProjects = async () => {
    const response = await axios.get('/api/projects');
    setProjects(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task._id) {
      await axios.patch(`/api/tasks/${task._id}`, task);
    } else {
      await axios.post('/api/tasks', task);
    }
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
      status: 'pending',
      project: '',
      assignedTo: ''
    });
    setIsEditing(false);
    fetchTasks();
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>

      {/* Task List */}
      {!isEditing && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Priority</th>
                <th className="px-4 py-2">Assigned To</th>
                <th className="px-4 py-2">Due Date</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(tasks) && tasks.map((task) => (
  <tr key={task._id}>
    <td className="border px-4 py-2">{task.title}</td>
    <td className="border px-4 py-2">{task.status}</td>
    <td className="border px-4 py-2">{task.priority}</td>
    <td className="border px-4 py-2">{task.assignedTo?.name || 'Unassigned'}</td>
    <td className="border px-4 py-2">{new Date(task.dueDate).toLocaleDateString()}</td>
  </tr>
))}

            </tbody>
          </table>
        </div>
      )}

      {/* Task Form */}
      {isEditing && (
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project</label>
            <select
              value={task.project}
              onChange={(e) => setTask({ ...task, project: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Project</option>
              {projects.map((project) => (
                <option key={project._id} value={project._id}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Assigned To</label>
            <select
              value={task.assignedTo}
              onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Unassigned</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
          >
            Save Task
          </button>
        </form>
      )}

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="mt-6 w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600"
      >
        {isEditing ? 'Back to List' : 'Create New Task'}
      </button>
    </div>
  );
};

export default Task;
