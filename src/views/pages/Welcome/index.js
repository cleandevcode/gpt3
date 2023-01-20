import React, { useState, useCallback, Suspense, lazy } from "react";
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
  const { email, userName, uid } = useSelector((state) => state?.auth?.user);

  const [surveyStep, setSurveyStep] = useState(0);
  const [creating, setCreating] = useState(false);

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
    if (!userName || !email || !uid) return;
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
    // try {
    //   await updateProfile(payload, uid);
    // } catch (error) {
    //   console.log("error>>>>", error);
    // }

    console.log("payload>>>>", payload);
    console.log("uid>>>>", uid);

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
    }, 3000);
  }, [creatingProfileData, email, userName, uid]);

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
