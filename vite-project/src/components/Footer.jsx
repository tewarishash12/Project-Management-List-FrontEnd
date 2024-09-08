import React from 'react';

function Footer() {
    return (
        <div className='bg-gray-400 h-40 flex flex-col justify-between fixed bottom-0 left-0 right-0'>
            <div className='flex flex-col items-center justify-center flex-grow'>
                <div className='flex items-center gap-4 mb-2'>
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='transition-transform duration-300 transform hover:scale-110'
                    >
                        <i className="fa-brands fa-square-instagram text-pink-600 text-2xl hover:text-pink-800"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-facebook text-blue-700 text-2xl"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube text-red-700 text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin text-blue-700 text-2xl"></i>
                    </a>
                </div>
                <div className='text-black text-center'>
                    <a href="#" className='mx-2 hover:underline'>Terms & Conditions</a>
                    <a href="#" className='mx-2 hover:underline'>Privacy Policy</a>
                    <a href="#" className='mx-2 hover:underline'>Term</a>
                </div>
            </div>
            <div className='w-full'>
                <p className='bg-black text-white text-center py-2 mb-0 w-full'>&copy; copyright</p>
            </div>
        </div>
    );
}

export default Footer;
