// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold mb-4">FoodBazaar</p>
        <p className="text-lg font-semibold mb-4">Owner: Abhishek Chauhan</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/abhishek-chauhan-94a011229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Abhishe31924145?t=vJJnMK2kuFI7GYkSEW2rqg&s=03"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/preabhisheklization?igshid=OGQ5ZDc2ODk2ZA=="
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Instagram
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          © 2023 FoodBazar . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
