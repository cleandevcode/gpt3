import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const TopSearchedWords = () => {
  return (
    <Container className="h-full">
      <h3>Top Searched Words</h3>
      <ComingSoon />
    </Container>
  );
};

export default TopSearchedWords;
