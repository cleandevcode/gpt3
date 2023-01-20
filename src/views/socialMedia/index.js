import { Container } from "components/shared";
import ComingSoon from "views/coming_soon";

const SocialMedia = () => {
  return (
    <Container className="h-full">
      <h3 className="mb-5">Social Media Manager</h3>
      <p>
        The social media manager tab will be where you launch your AI creations
        into the digital world by having the ability to post and schedule them
        onto a variety of social media platforms. You will have the ability to
        create custom scheduling and posts so you can build out your content
        calendar ahead of time. By eliminating tedious and timely tasks you can
        make sure that your business stays relevant by posting regularly and
        simplifying the entire process. This allows for a greater focus on
        building your business and becoming more effective and efficient with
        your time and how you utilize it.
      </p>
      <ComingSoon />
    </Container>
  );
};

export default SocialMedia;
