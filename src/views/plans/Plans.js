import { Spinner } from "components/ui";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiGetPlans } from "services/PlansServies";
import PlansCard from "./PlansCard";

const dummyData = [
  {
    title: "This Service Includes 1",
    image: null, // it will be image source i.e "/img/countries/ar.png"
    description: [
      "Lorem Ipsum is simply dummy text of the 1",
      "Lorem Ipsum is simply dummy text of the 2",
      "Lorem Ipsum is simply dummy text of the 3",
      "Lorem Ipsum is simply dummy text of the 4",
      "Lorem Ipsum is simply dummy text of the 5",
    ],
  },
  {
    title: "This Service Includes 2",
    image: null, // it will be image source i.e "/img/countries/ar.png"
    description: [
      "Lorem Ipsum is simply dummy text of the 1",
      "Lorem Ipsum is simply dummy text of the 2",
      "Lorem Ipsum is simply dummy text of the 3",
      "Lorem Ipsum is simply dummy text of the 4",
      "Lorem Ipsum is simply dummy text of the 5",
    ],
  },
];

const Plans = ({ inDialog = false, onCloseModal = undefined }) => {
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
                  inDialog={inDialog}
                  title={dummyData[idx].title}
                  iconImg={dummyData[idx].image}
                  description={dummyData[idx].description}
                  onCloseModal={() => onCloseModal?.()}
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
