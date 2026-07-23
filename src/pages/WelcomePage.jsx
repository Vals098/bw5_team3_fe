import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

const WelcomePage = function () {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={6}>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
