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
}) => {
  const token = useSelector((state) => state?.auth?.session?.token);
  const userEmail = useSelector((state) => state?.auth?.user?.email);
  const authority = useSelector((state) => state?.auth?.user?.authority);

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
          setLoading(false);
          // test remove
          dispatch(setUser(res.data.updatedUser));
          console.log(res.data);
          // test remove
          window.location.href = res.data.session.success_url;
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
        className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid"
        headerClass="p-0"
        footerBorder={false}
        headerBorder={false}
      >
        <h1 className="my-5">
          {!iconImg ? (
            <IconText
              className="text-emerald-500 	"
              icon={<FcApproval className="mx-auto block" />}
            ></IconText>
          ) : (
            <img style={{ width: 50, height: 50 }} src={iconImg} />
          )}
        </h1>
        <div className="my-1">
          <h3 className="text-2xl font-bold mx-auto block">
            ${plan.unit_amount / 100}{" "}
          </h3>{" "}
          <small>per month!</small>
        </div>

        <span className="text-emerald-600 font-semibold">{plan?.nickname}</span>
        {!inDialog && (
          <>
            <h4 className="font-bold my-3">{title}</h4>
            <ul className="dash">
              {description.length > 0 &&
                description.map((d, idx) => (
                  <li key={idx}>
                    <span>{d}</span>
                  </li>
                ))}
            </ul>
          </>
        )}

        <Button
          className="mt-5 w-full block"
          block
          loading={isLoading}
          variant="solid"
          onClick={() => handlePlan(plan.id, plan.nickname.toLowerCase())}
          disabled={selected}
        >
          {isLoading
            ? "Redirecting..."
            : selected
            ? "Current Plan"
            : "Get Started"}
        </Button>
      </Card>
    </div>
  );
};

export default PlansCard;
