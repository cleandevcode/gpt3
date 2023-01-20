import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const RoyaltyProgram = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Loyalty Program</h3>
      <p>
        The loyalty program tab will be one of the best ways to gamify your
        experience while working within the AI creative ecosystem. The more
        actions you take inside the system you will get rewarded for utilizing
        the power of AI through discounts, promotions, special offers and more.
        It is one of the only services that gives you a reason to work harder
        and longer at your business.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default RoyaltyProgram;
