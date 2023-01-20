import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const AiAnalytics = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Ai Analytics</h3>
      <p>
        The AI analytics tab will be your data collection and organization
        database. The analytics will pull relevant information from all your
        social accounts and provide you real-time data on your current and past
        posts so you know what is resonating with your audience and what is not.
        Knowing the direction to take your business after analyzing data will
        keep you ahead of the curve and up to date with the information your
        business needs to grow.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default AiAnalytics;
