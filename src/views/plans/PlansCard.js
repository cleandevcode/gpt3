import React, { useMemo, useState } from "react";
import { Card, Button, toast, Notification } from "components/ui";
import { IconText } from "components/shared";
import { FcApproval } from "react-icons/fc";
import { apiPlanSubscription } from "services/PlansServies";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/auth/userSlice";
import "./PlanCard.css";

const PlansCard = ({
  plan,
  inDialog,
  iconImg = null,
  title = "",
  description = [],
  onCloseModal = undefined,
  content,
  style,
}) => {
  const token = useSelector((state) => state?.auth?.session?.token);
  const userEmail = useSelector((state) => state?.auth?.user?.email);
  const authority = useSelector((state) => state?.auth?.user?.authority);

  //TODO: should not work with localstorage, maybe Redux?
  const isNew = localStorage.getItem("new");

  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const selected = useMemo(() => {
    return authority?.includes(plan?.nickname?.toLowerCase());
  }, [authority]);

  const handlePlan = (priceId, planName) => {
    setLoading(true);
    apiPlanSubscription(
      {
        email: userEmail,
        priceId,
        planName,
      },
      { authorization: `Bearer ${token}` }
    )
      .then((res) => {
        if (res) {
          window.location.href = res.data.session.url;
          dispatch(setUser(res.data.updatedUser));
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.push(<Notification title={err?.message} type="danger" />, {
          placement: "top-end",
        });
      });
  };

  return (
    <div className={`w-full  text-center`}>
      <Card
        // clickable
        className={`hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid ${style.background} h-full`}
        headerClass="p-0"
        footerBorder={false}
        headerBorder={false}
        bodyClass="flex flex-col justify-between h-full"
      >
        <h1 className="my-5" style={{ color: style.color }}>
          ${plan.unit_amount / 100}
        </h1>

        <h3 className="font-bold my-3" style={{ color: style.color }}>
          {title}
        </h3>
        <p
          style={{ color: style.color }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {!iconImg ? (
          <IconText
            className="text-emerald-500 	"
            icon={<FcApproval className="mx-auto block" />}
          ></IconText>
        ) : (
          <div className="flex items-center justify-center py-6">
            <img style={{ maxWidth: "100%", height: 120 }} src={iconImg} />
          </div>
        )}

        <Button
          className="mt-5 w-full block"
          block
          loading={isLoading}
          variant={style.buttonVarient}
          onClick={() => handlePlan(plan.id, plan.nickname.toLowerCase())}
          disabled={selected}
        >
          {isLoading
            ? "Redirecting..."
            : selected
            ? "Current Plan"
            : isNew
            ? "10 Days Free Trial"
            : "Upgrade Plan"}
        </Button>
      </Card>
    </div>
  );
};

export default PlansCard;
