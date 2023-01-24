import { Spinner } from "components/ui";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetPlans } from "services/PlansServies";
import PlansCard from "./PlansCard";

const dummyData = [
  {
    title: "This Service Includes 1",
    image: null, // it will be image source i.e "/img/countries/ar.png"
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "This Service Includes 2",
    image: null, // it will be image source i.e "/img/countries/ar.png"
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Plans = ({ inDialog = false }) => {
  const authority = useSelector((state) => state?.auth?.user?.authority);
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    apiGetPlans().then((res) => {
      setPlans(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="mb-8">
        <h3 className="mb-1 mx-auto ">Plans</h3>
        <div className="mt-5 mx-auto max-w-[800px]">
          <div className="mx-auto content-center grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {!plans ? (
              <Spinner></Spinner>
            ) : (
              plans?.map((plan, idx) => (
                <PlansCard
                  key={plan.id}
                  plan={plan}
                  selected={authority?.includes(plan?.nickname?.toLowerCase())}
                  inDialog={inDialog}
                  title={dummyData[idx].title}
                  iconImg={dummyData[idx].image}
                  description={dummyData[idx].description}
                ></PlansCard>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
