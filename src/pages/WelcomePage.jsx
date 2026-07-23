import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

const WelcomePage = function () {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg={6}>
          <RegisterForm />
          <div>
            <p>Hai già un account?</p>
            <Link to="/login"> Vai al login </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomePage;
