import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faDonate,
} from "@fortawesome/fontawesome-free-solid";
import formartValue from "../../utils/formatValue";
import HandleBalanceValues from "../../utils/HandleBalanceValues";

import "./style.css";

import api from "../../services/api";

const Header = () => {

  api.defaults.xsrfCookieName = "csrftoken";
  api.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      try {
        const response = await api.get("budget");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadInfo();
  }, [data]);

  const balance = HandleBalanceValues(data);
  const balanceIncome = HandleBalanceValues(data, "Receita");
  const balanceExpense = HandleBalanceValues(data, "Despesa");

  return (
    <Row>
      <Col>
        <Card
          className="mx-auto my-2"
          bsPrefix="card-style"
          style={{ boxShadow: "0 8px 6px -6px #18A0FB" }}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Saldo </Card.Title>
                <Card.Text className="card-text">
                  {formartValue(balance)}
                </Card.Text>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faDonate} color="#18A0FB" size="5x" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card
          className="mx-auto my-2"
          bsPrefix="card-style"
          style={{ boxShadow: "0 8px 6px -6px #66AB5C" }}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Receitas </Card.Title>
                <Card.Text className="card-text">
                  {formartValue(balanceIncome)}
                </Card.Text>
              </Col>
              <Col>
                <FontAwesomeIcon
                  icon={faArrowCircleUp}
                  color="#66AB5C"
                  size="5x"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          className="mx-auto my-2"
          bsPrefix="card-style"
          style={{ boxShadow: "0 8px 6px -6px #C43E36" }}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Despesas </Card.Title>
                <Card.Text className="card-text">
                  {formartValue(balanceExpense)}
                </Card.Text>
              </Col>
              <Col>
                <FontAwesomeIcon
                  icon={faArrowCircleDown}
                  color="#C43E36"
                  size="5x"
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
