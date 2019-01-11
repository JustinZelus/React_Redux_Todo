import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px"
      }}
    >
      {children}
    </button>
  );
};

Link.prototypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
export default Link;
