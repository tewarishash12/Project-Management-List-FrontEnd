import React from 'react';

function Footer({ darkMode }) {
    return (
        <div 
            className={`flex flex-col justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} transition-colors duration-300`}
            style={{ height: '80px' }}
        >
            <div className='flex flex-col items-center justify-center p-2'>
                <div className='flex items-center gap-4 mb-2'>
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 transform hover:scale-110'
                    >
                        <i className={`fa-brands fa-square-instagram ${darkMode ? 'text-pink-400' : 'text-pink-600'} text-xl hover:text-pink-800`}></i>
                    </a>
                    <a 
                        href="https://www.facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 transform hover:scale-110'
                    >
                        <i className={`fa-brands fa-square-facebook ${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl hover:text-blue-800`}></i>
                    </a>
                    <a 
                        href="https://www.youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 transform hover:scale-110'
                    >
                        <i className={`fa-brands fa-youtube ${darkMode ? 'text-red-500' : 'text-red-700'} text-xl hover:text-red-800`}></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 transform hover:scale-110'
                    >
                        <i className={`fa-brands fa-linkedin ${darkMode ? 'text-blue-400' : 'text-blue-700'} text-xl hover:text-blue-800`}></i>
                    </a>
                </div>
                <div className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    <a href="#" className='mx-2 hover:underline'>Terms & Conditions</a>
                    <a href="#" className='mx-2 hover:underline'>Privacy Policy</a>
                    <a href="#" className='mx-2 hover:underline'>Term</a>
                </div>
            </div>
            <div className='w-full'>
                <p className={`text-center py-2 mb-0 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-800'}`}>
                    &copy; {new Date().getFullYear()} Your Company Name
                </p>
            </div>
        </div>
    );
}

export default Footer;
