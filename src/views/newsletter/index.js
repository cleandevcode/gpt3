import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const NewsletterRelease = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Newsletter Release</h3>
      <p>
        The newsletter release tab will become one of the most vital pieces of
        your business once you begin gathering emails from potential customers.
        The ability to speak directly to your prospects by sending direct emails
        can not be overstated as one of the main driving forces of revenue as
        you begin to build your email list. The simple ability to transition AI
        created articles from other services inside AI creative to a newsletter
        and then into your prospects inbox will easily become one of your
        favorite features.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default NewsletterRelease;
