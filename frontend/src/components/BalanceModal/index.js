import React from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";

const BalanceModal = (props) => {
  return (
    <Modal
      backdrop="static"
      size="md"
      show={props.ativarModal}
      onHide={props.fecharModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>ALTERAR SALDO ATUAL</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formData">
            <Form.Label column sm="2">
              Saldo
            </Form.Label>
            <Col sm="11">
              <Form.Control type="number" />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.fecharModal}>
          FECHAR
        </Button>
        <Button variant="primary" onClick={props.fecharModal}>
          ALTERAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BalanceModal;
