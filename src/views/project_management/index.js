import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const ProjectManagement = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Project Management</h3>
      <p>
        The project management tab will be your main tool to organize and link
        together a variety of different AI systems so you can bring the power of
        multiple tools under one umbrella that work seamlessly together. The
        ability to link various projects to one another and streamline the
        creation process from start to finish with multiple different systems
        will increase the efficiency of how your business can get projects out
        of the concept stage, into the creation process and then launched into
        the digital ecosystem for others to enjoy.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default ProjectManagement;
