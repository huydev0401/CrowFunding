import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-darkBG isolate">
      <img
        src="./ellipse.png"
        alt="background"
        className="hidden lg:block pointer-events-none absolute bottom-0 right-0 left-0 w-full z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="./logo.svg" alt="crowfunding" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl text-text1 dark:text-white lg:mb-3">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
