import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const Upcoming = () => {
  return (
    <Container className="h-full">
      <h3>Upcoming Services</h3>
      <ComingSoon />
    </Container>
  );
};

export default Upcoming;
