import React from "react";
import PropTypes from "prop-types";
import classes from "./button.module.css";

export const Button = ({
  label,
  onKeyPress,
  customStyle,
  onClick,
  disabled,
  children,
  className,
  leftIcon,
  width,
  background,
  ...props
}) => {

  return (
    <>
      <button
      onKeyPress={onKeyPress}
        className={`${[classes.btn, className].join(" ")}`}
        style={customStyle && customStyle}
        onClick={onClick}
        disabled={disabled ? disabled : false}
        {...props}
      >
        {leftIcon && leftIcon}
        {label && label}
        {children && children}
      </button>
    </>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
  customStyle: {},
};
