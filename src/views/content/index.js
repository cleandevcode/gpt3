import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const ContentOrganizer = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Content Organizer</h3>
      <p>
        The content organizer tab will be a vital piece to keep your business
        assets organized and easily transferable to other members inside and
        outside of your organization once they have reached a state of
        completion. It will house your entire assets library that has been
        created with a variety of AI tools allowing you to go back to old
        projects and update them with new material when you have a new idea or
        want to update an existing concept. It will store all your completed
        videos, graphics, and more so at any moment you can browse the library
        that the power of AI has built with your cooperation and style.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default ContentOrganizer;
