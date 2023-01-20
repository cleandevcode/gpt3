import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const KnowledgeBase = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Knowledge Bases</h3>
      <p>
        The knowledge base tab will be a vital resource so you can access the
        most relevant and important information you need to grow your business
        on a variety of topics. With the internet being essentially limitless,
        the organization and systematic way to learn new ideas will be the
        driving force between what makes your business unique and stand out
        against the noise of the neverending data stream that the internet
        provides. All articles, videos, etc in our knowledge base will be
        reviewed by professionals so you can be confident you are only getting
        the very best information to utilize for your business.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default KnowledgeBase;
