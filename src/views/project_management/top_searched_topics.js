import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const TopSearchedTopics = () => {
  return (
    <Container className="h-full">
      <h3>Top Searched Topics</h3>
      <ComingSoon />
    </Container>
  );
};

export default TopSearchedTopics;
