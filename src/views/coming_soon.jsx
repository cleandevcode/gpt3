import { Container } from "components/shared";

const ComingSoon = () => {
  return (
    <Container className="bg-white text-center space-y-5 mt-5">
      <div className="space-y-5 p-5 ">
        <div className="flex items-center justify-center">
          <img
            src="/img/others/coming-soon.gif"
            alt="Coming Soon"
            className="w-100 h-100 object-contain"
          />
        </div>
        <p>
          This Page is still Under Development and it will be available soon.
        </p>
      </div>
    </Container>
  );
};

export default ComingSoon;
