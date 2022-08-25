import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={classNames(
          "select-none inline-flex items-center justify-center w-5 h-5 border rounded text-white cursor-pointer",
          checked
            ? "bg-primary border-primary"
            : "border-stroke dark:border-text3"
        )}
        onClick={onClick}
      >
        <input type="text" className="hidden" onChange={() => {}} name={name} />
        {checked && (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
      {children && (
        <div onClick={onClick} className="flex-1 cursor-pointer select-none">
          {children}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Checkbox;
