import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const TopSearchedServices = () => {
  return (
    <Container className="h-full">
      <h3>Top Searched Services</h3>
      <ComingSoon />
    </Container>
  );
};

export default TopSearchedServices;
