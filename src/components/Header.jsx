import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  return (
    <header className="bg-white shadow-md py-4 ">
      <nav className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <img src={logo} alt="Logo da Startup" className="ml-4 h-12 w-12 rounded-full" />
        </div>

        <ul className="flex space-x-8 text-gray-800 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="hover:text-blue-600">
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-600">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/assistant" className="hover:text-blue-600" >Assistente</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 mr-16" >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
