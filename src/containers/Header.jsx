import React from 'react';
import bg from '../assets/bg.jpg';

const Header = () => {
  return (
    <div
      className="h-64 w-3/6  mt-10 flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Contenido adicional dentro del componente Header */}
    </div>
  );
};

export default Header;
