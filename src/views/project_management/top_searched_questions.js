import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const TopSearchedQuestions = () => {
  return (
    <Container className="h-full">
      <h3>Top Searched Questions</h3>
      <ComingSoon />
    </Container>
  );
};

export default TopSearchedQuestions;
