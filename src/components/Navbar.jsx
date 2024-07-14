
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <>
      <main className=''>
        <div className="nav d-flex justify-content-around align-items-center bg-dark-subtle py-2 ">
          <div className="title">
            <h1 className=''>Todos</h1>
          </div>
          <div className="nav-items">
            <ul className=" d-flex list-unstyled bg-blue">
              <Link className='text-decoration-none ' href={"/"}><li className="px-4 text-black  ">Home</li></Link>
              <Link className='text-decoration-none ' href={"/about"}><li className="px-4 text-black ">About</li></Link>
              <Link className='text-decoration-none ' href={"/todos"}><li className="px-4 text-black ">Todos</li></Link>
              <Link className='text-decoration-none ' href={"/contact"}><li className="px-4 text-black ">Contact Us</li></Link>
              <Link className='text-decoration-none ' href={"/login"}><li className="px-4 text-black">Login</li></Link>
              <Link className='text-decoration-none ' href={"/signup"}><li className="px-4 text-black ">SignUp</li></Link>
              
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Navbar;
