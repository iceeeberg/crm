import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const ClientCard = ({ clients }) => {

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="primary" text="white" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {clients.firstName} {clients.lastName}
              </Card.Title>
              <Card.Text>{clients.description}</Card.Text>
              <h5>{clients.goals}</h5>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{clients.email}</ListGroupItem>
              <ListGroupItem>{clients.phoneNumber}</ListGroupItem>
              <ListGroupItem>{clients.city}</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientCard;
