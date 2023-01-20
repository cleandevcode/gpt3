import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const Badge = () => {
  return (
    <Container className="h-full">
      <h3>Badge level</h3>
      <ComingSoon />
    </Container>
  );
};

export default Badge;
