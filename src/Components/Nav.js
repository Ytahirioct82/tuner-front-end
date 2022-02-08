import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <Container>
        <Row>
          <Col>
            {" "}
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/new">
              <Button>Create New Song</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Nav;
