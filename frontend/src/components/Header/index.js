import React, {useState, useEffect, useMemo } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faArrowCircleDown, faDonate } from "@fortawesome/fontawesome-free-solid";
import formartValue from '../../utils/formatValue';

import './style.css';

import api from '../../services/api';

const Header = () => {
  const [financial, setFinancial] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      try {
        const response = await api.get('budget');
        setFinancial(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadInfo();
  }, []);

  const saldo = useMemo(() => {
    const saldoQuantidade = financial.reduce((acc, element) => {
        const valorTotal = acc + element.expense;
  
        return valorTotal;
    }, 0);
  
    return saldoQuantidade
  
  }, [financial]);
  
 
  const saldoReceita = useMemo(() => {
    const receitas = financial.filter(element => element.register_type === 'Receita');
    const receitasTotal = receitas.reduce((acc, element) => {
      const total = acc + element.expense;

      return total;
    }, 0);
   
    return receitasTotal;
  
  }, [financial]);

  const saldoDespesa = useMemo(() => {
    const receitas = financial.filter(element => element.register_type === 'Despesa');
    const receitasTotal = receitas.reduce((acc, element) => {
      const total = acc + element.expense;

      return total;
    }, 0);
   
    return receitasTotal;
  
  }, [financial]);

  return (
    <Row>
      <Col>
        <Card 
            border="secondary" 
            className="mx-auto my-2" 
            style={{ width: '21rem', borderRadius: '10px'}}
        >
          <Card.Body >
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Saldo </Card.Title>
                <Card.Text className="card-text">{formartValue(saldo)}</Card.Text>
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
            border="secondary" 
            className="mx-auto my-2" 
            style={{ width: '21rem', borderRadius: '10px'}}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Receitas </Card.Title>
                <Card.Text className="card-text">{formartValue(saldoReceita)}</Card.Text>
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
            border="secondary" 
            className="mx-auto my-2 card-container" 
            style={{ width: '21rem', borderRadius: '10px'}}
        >
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="mb-2 text-muted">Despesas </Card.Title>
                <Card.Text className="card-text">{formartValue(saldoDespesa)}</Card.Text>
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
