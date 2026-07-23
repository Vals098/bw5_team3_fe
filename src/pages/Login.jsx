import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Login(){

    const navigate = useNavigate();
    
    return (
        <Container>
            <Row>
                <Col>
                
                <Card>
                    <h2>Login</h2>
                    <p>pagina di login temporanea</p>

                    <Button onClick= {() => navigate("/menu")}>Entra come User</Button>
                    <Button onClick= {() => navigate("/menu-admin")}>Entra come Admin</Button>
                </Card>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Login;