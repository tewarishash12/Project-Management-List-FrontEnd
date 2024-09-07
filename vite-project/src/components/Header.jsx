import React from 'react';

const Header = ({ darkMode }) => {
    return (
        <header className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-indigo-600 text-white'} sm:text-xl md:text-2xl lg:text-3xl`}>
            <h1 className="font-bold">Project Management Tool</h1>
        </header>
    );
};

export default Header;
