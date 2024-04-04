/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex  ">
      <div className=" w-1/2 flex justify-start pl-10  font-gotu font-medium py-2 text-amber-950" style={{fontFamily:"Gotu"}}>🎨VANGOGH ART GALLERY</div>
      <div className=" space-x-4  py-2 px w-1/2  flex flex-row justify-end">
        <ul className="list-none text-white flex justify-center space-x-4 px-10 text-stone-950  font-medium" style={{fontFamily:"Gotu"}}>
          <li>

            <Link to="/home">Home</Link>
          </li>
          <li>
            
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
