import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-4 flex justify-center">
      <div className="flex gap-4">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
