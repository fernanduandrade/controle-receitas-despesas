import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faPiggyBank,
} from "@fortawesome/fontawesome-free-solid";

const Header = (props) => {
  return (
    <Row>
      <Col>
        <Card 
            border="secondary" 
            className="mx-auto my-2" 
            style={{ width: '17rem', borderRadius: '10px'}}
        >
          <Card.Body >
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Saldo </Card.Title>
                <Card.Text>R$ {props.saldo}</Card.Text>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faPiggyBank} color="#18A0FB" size="3x" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card 
            border="secondary" 
            className="mx-auto my-2" 
            style={{ width: '17rem', borderRadius: '10px'}}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Receitas </Card.Title>
                <Card.Text>R$ {props.receitas}</Card.Text>
              </Col>
              <Col>
                <FontAwesomeIcon
                  icon={faArrowCircleUp}
                  color="#66AB5C"
                  size="3x"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card 
            border="secondary" 
            className="mx-auto my-2 card-container" 
            style={{ width: '17rem', borderRadius: '10px'}}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Despesas </Card.Title>
                <Card.Text>R$ {props.despesas}</Card.Text>
              </Col>
              <Col>
                <FontAwesomeIcon
                  icon={faArrowCircleDown}
                  color="#C43E36"
                  size="3x"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Header;
