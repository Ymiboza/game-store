import React from "react";
import classNames from "classnames";
import './button.css'

const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    'btn': true,
    'btn_secondary': type === 'secondary',
    'btn_primary': type === 'primary',
    'btn_small': size === 's',
    'btn_medium': size === 'm',
  });
  return <button className={btnClass} onClick={onClick}>{children}</button>;
};

export default Button;
