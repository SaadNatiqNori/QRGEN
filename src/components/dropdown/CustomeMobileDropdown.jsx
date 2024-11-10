import React, { useRef, useState } from "react";
// Hook
import useOutsideClick from "../../hooks/useOutsideClick";

export default function CustomeMobileDropdown({ text }) {
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
  // useOutsideClick(elementRef, handleCloseDropDown);

  return (
    <div className="relative w-full" ref={elementRef}>
      <div
        className={`w-full cursor-pointer text-black flex justify-between items-center gap-2 pb-1 ${opened ? 'pb-1 border-b-2 text-primary border-primary' : ''}`}
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
        className={`${!opened ? "hidden" : "flex"
          }  flex-col justify-center items-center gap-2 bg-white w-full transform duration-500 z-[222]`}
      >
        {/* Drop Don Options */}
        <div
          className={`pt-2 hover:bg-gray-200 cursor-pointer rounded-3xl w-full flex justify-start items-center gap-4`}
        >
          <p className="text-md text-gray-600">Something for test</p>
        </div>
      </div>
    </div>
  );
}
