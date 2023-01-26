import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { HiOutlineCreditCard } from "react-icons/hi";
import withHeaderItem from "utils/hoc/withHeaderItem";
import { Dialog, Tooltip } from "components/ui";
import Plans from "views/plans/Plans";
import useWindowSize from "components/ui/hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { setPlanModalOpen } from "store/base/commonSlice";

export const SparkPlan = ({ className }) => {
  const dispatch = useDispatch();
  const userAuthority = useSelector((state) => state?.auth?.user?.authority);
  const isModalOpen = useSelector(
    (state) => state?.base?.common?.planModalOpen
  );
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (isModalOpen) setOpen(true);
    else setOpen(false);
  }, [isModalOpen]);

  if (userAuthority?.includes("user"))
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
          onRequestClose={() => {
            setOpen(false);
            dispatch(setPlanModalOpen(false));
          }}
          width={width > 768 ? 1000 : "unset"}
          height={width > 768 ? "auto" : 620}
        >
          <div className="p-2">
            <div className="py-6 px-5 max-h-[600px] overflow-y-auto ">
              <Plans
                inDialog={width < 768}
                onCloseModal={() => {
                  setOpen(false);
                  dispatch(setPlanModalOpen(false));
                }}
              />
            </div>
          </div>
        </Dialog>
      </>
    );
  return <></>;
};

export default withHeaderItem(SparkPlan);
