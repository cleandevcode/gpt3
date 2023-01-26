import { Spinner } from "components/ui";
import React, { useEffect, useState } from "react";
import { apiGetPlans } from "services/PlansServies";
import PlansCard from "./PlansCard";

const dummyData = [
  {
    title: "Starter Plan",
    image: "/img/products/P1.png",
    description: [],
    content: "37 Ai Tools For <br /> Your Social Media Needs",
    style: {
      background: `bg-white`,
      color: `black`,
      buttonBG: `bg-indigo-600`,
      buttonVarient: `solid`,
    },
  },
  {
    title: "Premium Plan",
    image: "/img/products/P2.png",
    description: [],
    content: `71 Ai Tools To Help You Take Your Online <br /> Presence To New Height`,
    style: {
      background: `bg-white`,
      color: `black`,
      buttonBG: `bg-indigo-600`,
      buttonVarient: `solid`,
    },
  },
];

const Plans = ({ inDialog = false, onCloseModal = undefined }) => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setLoading(true);
    apiGetPlans()
      .then((res) => {
        setPlans(res.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="mb-8">
        <h3 className="mb-1 mx-auto ">Plans</h3>
        <div className="mt-5 mx-auto max-w-[800px]">
          <div className="mx-auto content-center grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {/* {loading && <Spinner></Spinner>} */}
            {!loading &&
              plans?.length > 0 &&
              plans?.map((plan, idx) => (
                <PlansCard
                  key={plan.id}
                  plan={plan}
                  inDialog={inDialog}
                  title={dummyData[idx].title}
                  iconImg={dummyData[idx].image}
                  description={dummyData[idx].description}
                  onCloseModal={() => onCloseModal?.()}
                  content={dummyData[idx].content}
                  style={dummyData[idx].style}
                ></PlansCard>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
