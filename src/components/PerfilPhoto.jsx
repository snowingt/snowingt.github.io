import React from 'react'
import snow from '../assets/snow.jpg'

const PerfilPhoto = () => {
    return (
        <div className="relative w-32 h-32   border-white border-2 rounded-full overflow-hidden ">
        <img className="w-full h-full object-cover" src={snow} alt="Profile" />
      </div>
      
    )
}

export default PerfilPhoto