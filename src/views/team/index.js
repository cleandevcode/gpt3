import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const Team = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Invite Team Members</h3>
      <p>
        The team members tab will allow you to onboard new members to your team
        and assign them specific roles and duties so you can continually scale
        your business into greater and greater heights.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default Team;
