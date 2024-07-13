
import React from 'react';

function Navbar() {
  return (
    <>
      <main className=' bg-orange-300'>
        <div className="nav flex justify-between items-center p-4">
          <div className="title">
            <h1>Todos</h1>
          </div>
          <div className="nav-items">
            <ul className="flex justify-evenly w-full bg-red-600 p-0 list-none">
              <li className="px-4">Home</li>
              <li className="px-4">About</li>
              <li className="px-4">Todos</li>
              <li className="px-4">Contact Us</li>
              <li className="px-4">Login</li>
              <li className="px-4">SignUp</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Navbar;
