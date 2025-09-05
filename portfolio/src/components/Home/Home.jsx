import React from 'react'

function Home() {
  return (
 <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-gray-900 via-blue-900 to-black px-8">
  {/* Text Section (left) */}
  <div className="flex-1">
    <h1 className="text-7xl font-extrabold text-white text-left">
      I am a software developer
    </h1>
    {/* Add subtitle or button here if you want */}
  </div>
  {/* Image Section (right) */}
  <div className="flex-1 flex justify-end">
    <img
      src="https://img.freepik.com/premium-photo/vector-illustration-depicting-male-software-engineer_1110958-62483.jpg"
      className="max-h-72 w-auto object-contain rounded-xl shadow-xl"
      alt="Software Developer"
    />
  </div>
</div>


    
  )
}

export default Home