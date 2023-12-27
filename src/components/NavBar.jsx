import React from "react";

function NavBar({ numOfProducts }) {
  return (
    <div className="flex items-center justify-center h-12 gap-x-4 bg-slate-700 mb-6">
      <h1 className="md:text-xl text-sm font-bold text-slate-300">
        Inventory App using tailwind & React.js
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300">
        {numOfProducts}
      </span>
    </div>
  );
}

export default NavBar;
