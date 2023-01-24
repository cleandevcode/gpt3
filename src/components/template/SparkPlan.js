import React, { useState } from "react";
import classNames from "classnames";
import { HiOutlineCreditCard } from "react-icons/hi";
import withHeaderItem from "utils/hoc/withHeaderItem";
import { Dialog, Tooltip } from "components/ui";
import Plans from "views/plans/Plans";
import useWindowSize from "components/ui/hooks/useWindowSize";
import { useSelector } from "react-redux";

export const SparkPlan = ({ className }) => {
  const userAuthority = useSelector((state) => state?.auth?.user?.authority);

  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  if (userAuthority?.includes("premium"))
    return (
      <>
        <Tooltip title="Upgrade Plan" placement="bottom">
          <div
            className={classNames(className, "flex items-center")}
            onClick={() => setOpen(true)}
          >
            <div className="text-2xl ">
              <HiOutlineCreditCard />
            </div>
            <span className="ml-1"> Upgrade Now</span>
          </div>
        </Tooltip>

        <Dialog
          contentClassName="p-0"
          isOpen={open}
          closable={false}
          onRequestClose={() => setOpen(false)}
          width={width > 768 ? 1000 : "unset"}
        >
          <div className="p-2">
            <div className="py-6 px-5 max-h-[650px] overflow-y-auto ">
              <Plans inDialog={width < 768} />
            </div>
          </div>
        </Dialog>
      </>
    );
  return <></>;
};

export default withHeaderItem(SparkPlan);
