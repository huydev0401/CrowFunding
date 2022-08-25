import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Input = (props) => {
  const {
    name,
    control,
    error = "",
    type = "text",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={error.length <= 0 ? placeholder : ""}
        className={classNames(
          "bg-transparent w-full px-6 py-4 text-sm font-medium border rounded-lg dark:text-white placeholder:text-text4 dark:placeholder:text-text2",
          error.length > 0
            ? "border-error text-error"
            : "border-stroke text-text1 dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <p className="absolute text-sm font-medium bg-white pointer-events-none dark:bg-darkBG text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </p>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
