import React from 'react';

const Avatar = ({ img, text, emoji,date }) => {
  return (
    <div className="  flex w-full">
      <div className="flex  ">
        <div className="relative w-11 h-11 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt="Profile" />
        </div>
        <div>

        <div className="flex text-white  pl-2">
          <h3 className='font-medium'>{text}</h3>
          <span className="flex pl-1">{emoji}</span>
          <span className='flex pl-2 text-sm font-thin'>{date}</span>
        </div>
     
        </div>
      </div>
    </div>
  );
};

export default Avatar;
