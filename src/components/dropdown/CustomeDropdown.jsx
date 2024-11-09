import React, { useRef, useState } from "react";
// Hook
import useOutsideClick from "../../hooks/useOutsideClick";

export default function CustomeDropdown({ text }) {
  const [opened, setOpened] = useState(false);
  const elementRef = useRef(null);
  // Handle Opening DropDown
  const handleOpenDropDown = () => {
    setOpened(!opened);
  };
  // Handle Closing DropDown when clicked outside
  const handleCloseDropDown = () => {
    setOpened(false);
  };
  // Attach the outside click handler to the element
  useOutsideClick(elementRef, handleCloseDropDown);

  return (
    <div className="relative" ref={elementRef}>
      <div
        className={`cursor-pointer text-black flex justify-center items-center gap-2 pb-1 border-b-2 border-transparent hover:text-primary hover:border-primary ${opened ? 'pb-1 border-b-2 text-primary border-primary' : ''}`}
        onClick={handleOpenDropDown}
      >
        {text}{' '}
        {opened ? (
          <i className="fa-solid fa-xs fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-xs fa-chevron-down"></i>
        )}
      </div>

      {/* DropDown Content */}
      <div
        className={`${!opened ? "invisible" : "visible"
          } flex flex-col justify-center items-center gap-2 bg-white border border-gray-200 rounded-2xl p-4 w-52 my-4 absolute top-6 right-0 transform  shadow-sm z-[222]`}
      >
        {/* Drop Don Options */}
        <div
          className={`p-2 hover:bg-gray-200 cursor-pointer rounded-3xl w-full flex justify-start items-center gap-4`}
        >
          <p className="text-md px-2">Something for test</p>
        </div>
      </div>
    </div>
  );
}
