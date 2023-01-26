import React from "react";
import { Card, Progress } from "components/ui";

const ProgressInfo = ({ precent }) => {
  return (
    <div>
      <h3 className="font-bold">88%</h3>
      <p>Opened</p>
    </div>
  );
};

const EmailSent = ({ data = [], className }) => {
  return (
    <Card className={className}>
      <h4>Dashboard Speed</h4>
      <div className="mt-6">
        <Progress
          variant="circle"
          percent={data.precent}
          width={200}
          className="flex justify-center"
          strokeWidth={4}
          customInfo={<ProgressInfo precent={data.precent} />}
        />
      </div>
      <div className="text-center mt-6">
        <p className="font-semibold">Performace</p>
        <h4 className="font-bold">Phenomenal</h4>
      </div>
    </Card>
  );
};

export default EmailSent;
