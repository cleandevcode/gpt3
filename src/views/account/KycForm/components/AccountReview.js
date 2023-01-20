import React from "react";
import { DoubleSidedImage } from "components/shared";
import { Button } from "components/ui";
import { useNavigate } from "react-router-dom";

const AccountReview = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center h-full flex flex-col justify-center">
      <DoubleSidedImage
        className="mb-6 mx-auto"
        src="/img/others/pending-approval.png"
        darkModeSrc="/img/others/pending-approval-dark.png"
        alt=""
      />
      <h4 className="mb-4">Account application proccessing</h4>
      <p>
        Your account application is currently under review & will be finalize
        shortly.
        <br />
        To fast track your account proccessing, you can try to contact our
        customer services.
      </p>
      <div className="mt-5">
        <Button
          variant="solid"
          style={{ width: 200 }}
          onClick={() => navigate("/app/crm/dashboard")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AccountReview;
