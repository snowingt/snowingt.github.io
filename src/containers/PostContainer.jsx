import React, { useState } from 'react';
import Avatar from '../components/Avatar';

const PostContainer = ({ img, avatar, name, emoji, date, desc, description, tag,link ,ver,setContent,show,setShow}) => {
  const [isHovered, setIsHovered] = useState(false);
 
 
  const handleClick = () => {
    setShow(!show);
    setContent({
      img:img,
      avatar:avatar,
      name:name,
      emoji:emoji,
      date:date,
      desc:desc,
      description:description,
      tag:tag,
      link:link,
      

    });
  };


  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      onClick={handleClick}

      className={`relative rounded-lg transition-opacity-75 duration-300 ${
        isHovered ? 'shadow-lg shadow-gray-900' : ''
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={`flex flex-col  mb-4`}>
        <Avatar img={avatar} text={name} emoji={emoji} date={date} />
        <div className="ml-4">
          <h3 className="text-xl text-white font-bold">{tag}</h3>
         
        </div>
      </div>
      <div className={`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 text-white flex justify-center items-end ${isHovered ? '' : 'hidden'}`}>
        <p className="text-white bg-black bg-opacity-50  ">{ver}</p>
      </div>
      <img className="w-full rounded-lg" src={img} alt="" />
      
    </div>
  );
};

export default PostContainer;
