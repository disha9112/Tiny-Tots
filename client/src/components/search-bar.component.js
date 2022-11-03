import React, { useState } from "react";

function SearchBar() {
  return (
    <div className="text-center rounded-lg p-5">
      <div className="my-5 text-3xl font-bold">
        Explore a plethora of queries, to know the best for your child.
      </div>
      <form className="grid justify-center">
        <input
          className="rounded-lg my-3 w-full p-2.5 text-md border-outline-[#DCD6E4] outline-[#DCD6E4]"
          type="text"
          placeholder="Type a query..."
        />
        <button className="p-2 text-xl cursor-pointer border-none focus:outline-none bg-pink-primary text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
