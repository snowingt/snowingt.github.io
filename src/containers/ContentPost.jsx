import React from 'react';
import { useNavigate } from "react-router-dom";

const ContentPost = ({ content,setShow }) => {
    const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="max-w-4xl mx-auto rounded-lg shadow-lg">
     
      <div className="p-6">
        <h3 className="text-2xl mb-10 text-white font-bold  leading-tight">{content.desc}</h3>
        <img className="w-full h-auto object-cover rounded-t-lg" src={content.img} alt="" />
        <p className="text-white mb-4">{/* Fecha u otra información */}</p>
        <h3 className="text-xl whitespace-pre-line text-white font-bold mb-10 leading-tight">{content.description}</h3>
        
        <div className="bg-gray-100 p-4 flex items-center justify-center  rounded-lg">
          <a href={content.link} target="_blank" rel="noopener noreferrer">Link to App
          </a>
        </div>
        <div className=" p-4 flex items-center justify-center  rounded-lg">
         
        <button className=" text-white py-2 px-4 rounded  flex items-center justify-center text-center" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ContentPost;

