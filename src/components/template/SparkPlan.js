import React, { useState } from "react";
import classNames from "classnames";
import { HiOutlineCreditCard } from "react-icons/hi";
import withHeaderItem from "utils/hoc/withHeaderItem";
import { Dialog } from "components/ui";
import Plans from "views/plans/Plans";
import useWindowSize from "components/ui/hooks/useWindowSize";

export const SparkPlan = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      <div
        className={classNames(className, "text-2xl")}
        onClick={() => setOpen(true)}
      >
        <HiOutlineCreditCard />
      </div>
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
};

export default withHeaderItem(SparkPlan);
