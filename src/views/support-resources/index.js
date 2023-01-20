import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const SupportResources = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Support & Resources</h3>
      <p>
        If you are ever having any problems or trouble with any of our systems
        we are not far off and will be happy to help with whatever you need. We
        are doing our part in giving people the freedom they need with the
        digital revolution and we want you to know we will have your back every
        step of the way!
      </p>
      <ComingSoon />
    </Container>
  );
};

export default SupportResources;
