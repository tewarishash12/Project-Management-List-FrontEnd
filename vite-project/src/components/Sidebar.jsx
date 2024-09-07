import React from 'react';

const Sidebar = ({ isVisible, darkMode }) => {
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);

  const toggleProjectsDropdown = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <div className={`min-h-screen w-64 bg-gray-800 text-gray-200 ${isVisible ? 'block' : 'hidden'} transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="py-4 px-6">
        {/* Section: Navigation */}
        <div className="mb-6">
          <ul className="space-y-4">
            <li className="p-3 rounded hover:bg-gray-700">
              <a href="#" className="block hover:text-gray-300">
                <i className="fa-solid fa-house"></i>
                <span className="ml-2">Home</span>
              </a>
            </li>
            <li className="p-3 rounded hover:bg-gray-700">
              <a href="#" className="block hover:text-gray-300">
                <i className="fa-solid fa-list-check"></i>
                <span className="ml-2">My Tasks</span>
              </a>
            </li>
            <li className="p-3 rounded hover:bg-gray-700">
              <a href="#" className="block hover:text-gray-300">
                <i className="fa-solid fa-bell"></i>
                <span className="ml-2">Inbox</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Section: Projects */}
        <div className="mb-6">
          <h2 
            className="text-lg font-semibold mb-4 cursor-pointer flex items-center justify-between p-3 rounded hover:bg-gray-700"
            onClick={toggleProjectsDropdown}
          >
            Projects
            <i className={`fas ${isProjectsOpen ? 'fa-chevron-up' : 'fa-chevron-down'} ml-2`}></i>
          </h2>
          {isProjectsOpen && (
            <ul className="space-y-4">
              <li className="p-3 rounded hover:bg-gray-700">
                <a href="#" className="block hover:text-gray-300">Task Management System</a>
              </li>
              <li className="p-3 rounded hover:bg-gray-700">
                <a href="#" className="block hover:text-gray-300">Project Alpha</a>
              </li>
              <li className="p-3 rounded hover:bg-gray-700">
                <a href="#" className="block hover:text-gray-300">Project Beta</a>
              </li>
            </ul>
          )}
        </div>

        {/* Section: Team */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 p-3 rounded hover:bg-gray-700">Team</h2>
          <ul className="space-y-4">
            <li className="p-3 rounded hover:bg-gray-700">
              <a href="#" className="block hover:text-gray-300">
                <i className="fa-solid fa-users-line"></i>
                <span className="ml-2">Workspace</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Invite and Help */}
        <div className="absolute bottom-6 left-6">
          <button className="bg-blue-500 text-white py-1 rounded mb-2 text-sm w-full hover:bg-blue-600">
            Invite teammates
          </button>
          <a href="#" className="text-sm text-blue-300 hover:underline">Help with Asana</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
