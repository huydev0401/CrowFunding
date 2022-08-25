import React from "react";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 border rounded-lg gap-x-3 border-stroke dark:border-darkStroke"
      onClick={onClick}
    >
      <img src="./icon-google.svg" alt="icon google" />
      <p className="font-semibold lg:text-base dark:text-white">{text}</p>
    </button>
  );
};

export default ButtonGoogle;
