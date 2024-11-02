import React from 'react';

const ProgressBar = ({ progress, darkMode }) => {
    return (
        <div className={`h-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} sm:h-5 md:h-6 lg:h-8`}>
            <div className={`h-full ${darkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
