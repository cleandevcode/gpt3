import React, { useState, useCallback, Suspense, lazy, useEffect } from "react";
import { Container } from "components/shared";

import { injectReducer } from "store";
import reducer from "./store";
import { useDispatch, useSelector } from "react-redux";
import { setCreateProfile } from "./store/dataSlice";
import { updateProfile } from "services/PlansServies";
import { useNavigate } from "react-router-dom";
import { Notification, toast } from "components/ui";

injectReducer("createProfileForm", reducer);

const Step1 = lazy(() => import("./components/Step1"));
const Step2 = lazy(() => import("./components/Step2_v2"));
const Step3 = lazy(() => import("./components/Step2"));
const Step4 = lazy(() => import("./components/Step3"));
const Step5 = lazy(() => import("./components/Step4"));
const QuickStart = lazy(() => import("./components/QuickStart"));

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const creatingProfileData = useSelector(
    (state) => state.createProfileForm.data.user
  );
  const authority = useSelector((state) => state?.auth?.user?.authority);

  const { email, userName, _id } = useSelector((state) => state?.auth?.user);

  const [surveyStep, setSurveyStep] = useState(0);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (authority && authority?.length > 0) {
      const isNew = localStorage.getItem("new");
      const isPlaned =
        authority.includes("standard") || authority.includes("premium");

      if (isPlaned && !isNew)
        setTimeout(() => {
          navigate(`/app/crm/dashboard`);
        }, 500);
    }
  }, [authority]);

  const handleNext = useCallback(
    (payload) => {
      dispatch(setCreateProfile(payload));
      if (surveyStep === 4) {
        console.log(`creating profile`);
      } else {
        setSurveyStep(surveyStep + 1);
      }
    },
    [surveyStep, dispatch, setCreateProfile]
  );

  const handleBack = useCallback(() => {
    setSurveyStep(surveyStep - 1);
  }, [surveyStep]);

  const handleSkip = () => {
    setSurveyStep(4);
  };

  const handleCreateProfile = useCallback(async () => {
    if (!userName || !email || !_id) return;
    const { title, organization, industry, language, timeZone, country } =
      creatingProfileData;
    const payload = {
      userName,
      email,
      avatar: "",
      title,
      organization,
      industry,
      language,
      timeZone,
      country,
    };
    try {
      await updateProfile(payload, _id, { 'Content-Type': 'application/json' });
    } catch (error) {
      console.log(error);
    }

    //TODO: Api integration - /update-user/id
    setCreating(true);
    setTimeout(() => {
      setCreating(false);
      toast.push(
        <Notification title={"Successfuly Onboarded"} type="success">
          Your profile is updated!
        </Notification>
      );
      navigate(`/app/crm/dashboard`);
      localStorage.removeItem("new");
    }, 3000);
  }, [creatingProfileData, email, userName, _id]);

  if (creating) {
    return (
      <Container className="h-full ">
        <div className="h-full flex flex-col items-center justify-center">
          <p>Creating profile...</p>
        </div>
      </Container>
    );
  }
  return (
    <Container className="h-full">
      <div className="h-full flex flex-col items-center justify-center">
        <Suspense fallback={<></>}>
          {surveyStep === 0 && (
            <Step1
              onNext={() => setSurveyStep(surveyStep + 1)}
              onSkip={handleSkip}
            />
          )}
          {surveyStep === 1 && (
            <Step2 onNext={handleNext} onBack={handleBack} />
          )}
          {surveyStep === 2 && (
            <Step3 onNext={handleNext} onBack={handleBack} />
          )}
          {surveyStep === 3 && (
            <Step4 onNext={handleNext} onBack={handleBack} />
          )}
          {surveyStep === 4 && (
            <Step5 onNext={handleCreateProfile} onBack={handleBack} />
          )}
        </Suspense>
      </div>
    </Container>
  );
};

export default Welcome;
