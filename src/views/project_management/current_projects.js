import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const CurrentProjects = () => {
  return (
    <Container className="h-full">
      <h3>Current Projects</h3>
      <ComingSoon />
    </Container>
  );
};

export default CurrentProjects;
