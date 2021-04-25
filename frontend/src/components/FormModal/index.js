import React from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import {TIPOREGISTRO, TIPOCATEGORIA, TIPOPAGAMENTO} from './utils';

const FormModal = (props) => {
  return (
    <Modal
      backdrop="static"
      size="lg"
      show={props.ativarModal}
      onHide={props.fecharModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>NOVO REGISTRO</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formData">
            <Form.Label column sm="2">
              Dia
            </Form.Label>
            <Col sm="11">
              <Form.Control type="date" />
            </Col>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="form">
                <Form.Label column sm="2">
                  Registro
                </Form.Label>
                <Col>
                  <Form.Control as="select">
                  {TIPOREGISTRO.map((option, index) => <option key={index}>{option}</option>)}
                  </Form.Control>
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="form">
                <Form.Label column sm="2">
                  Categoria
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="select">
                    {TIPOCATEGORIA.map((option, index) => <option key={index}>{option}</option>)}  
                  </Form.Control>
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="form">
                <Form.Label column sm="2">
                  Descrição
                </Form.Label>
                <Col sm="11">
                  <Form.Control type="text" placeholder="Descrição do que foi feito" />
                </Col>
              </Form.Group>
            
              <Form.Group controlId="form">
                <Form.Label column sm="2">
                  Valor
                </Form.Label>
                <Col sm="11">
                  <Form.Control type="number" placeholder="Valor" />
                </Col>
              </Form.Group>

              <Form.Group controlId="form">
                
                <Form.Label column sm="2">
                  Formato
                </Form.Label>
                <Col sm="11">
                  <Form.Control as="select">
                    {TIPOPAGAMENTO.map((option, index) => <option key={index}>{option}</option>)} 
                  </Form.Control>
                </Col>
              </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.fecharModal}>
          FECHAR
        </Button>
        <Button variant="primary" onClick={props.fecharModal}>
          ADICIONAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
