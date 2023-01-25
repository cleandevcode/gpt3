import React from "react";
import PropTypes from "prop-types";
import useAuthority from "utils/hooks/useAuthority";

const PlanCheck = (props) => {
  const { userAuthority = [], authority = [], children, onLinkClick } = props;

  const roleMatched = useAuthority(userAuthority, authority);
  return <div onClick={() => onLinkClick(roleMatched)}>{children}</div>;
};

PlanCheck.propTypes = {
  userAuthority: PropTypes.array,
  authority: PropTypes.array,
  onLinkClick: PropTypes.func,
};

export default PlanCheck;
