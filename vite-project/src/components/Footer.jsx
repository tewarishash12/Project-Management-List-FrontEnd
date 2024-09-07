import React from 'react'

function Footer(props) {


    return (
        
        <div className='bg-gray-400 h-40  flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-center flex-grow'>
          <div className='flex items-center gap-4 mb-2 '>
            <i class="fa-brands fa-square-instagram text-pink-600 text-2xl"></i>
            <i class="fa-brands fa-square-facebook text-blue-700 text-2xl"></i>
            <i class="fa-brands fa-youtube text-red-700 text-2xl"></i>
            <i class="fa-brands fa-linkedin text-blue-700 text-2xl"></i>
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
      


    )
}
export default Footer