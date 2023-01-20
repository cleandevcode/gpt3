import React from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

const withHeaderItem = (Component) => (props) => {
  const location = useLocation();
  const { className, hoverable = true } = props;

  const isDisable =
    location.pathname.includes(`kyc-form`) ||
    location.pathname.includes(`welcome`);

  if (isDisable) {
    return <></>;
  }
  return (
    <Component
      {...props}
      className={classNames(
        "header-action-item",
        hoverable && "header-action-item-hoverable",
        className
      )}
    />
  );
};

export default withHeaderItem;
