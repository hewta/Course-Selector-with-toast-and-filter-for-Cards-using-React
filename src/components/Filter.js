import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((i) => (
        <button
          key={i.id}
          className={`bg-black m-2 text-lg text-white font-medium py-1 px-2 border-2 rounded-md shadow-md hover:bg-opacity-50 transition duration-300 ease-in-out
          ${
            category === i.title
              ? "bg-opacity-60 border-white"
              : "bg-opacity-40 border-transparent"
          }
          `}
          onClick={() => filterHandler(i.title)}
        >
          {i.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
