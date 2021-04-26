import React, { useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import {
  TIPOREGISTRO,
  TIPOCATEGORIA,
  TIPOPAGAMENTO,
} from "../../utils/choices";
import api from "../../services/api";

const FormModal = (props) => {

  const [date, setDate] = useState("");
  const [register_type, setRegisterType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expense, setExpense] = useState("");
  const [expense_type, setExpenseType] = useState("");

  async function handleCreateResgiter(e) {
    e.preventDefault();

    const newData = {
      date,
      register_type,
      category,
      description,
      expense,
      expense_type,
    };

    try {
      await api.post("budget/", newData).then((response) => {
        if (response.status === 201) {
          toast.success('Registro adicionado!');
          props.fecharModal();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

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
        <Form onSubmit={handleCreateResgiter}>
          <Form.Group controlId="formData">
            <Form.Label column sm="2">
              Dia
            </Form.Label>
            <Col sm="11">
              <Form.Control
                required
                name="date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="form">
                <Form.Label column sm="2">
                  Registro
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    name="register_type"
                    as="select"
                    onChange={(e) => setRegisterType(e.target.value)}
                  >
                    <option>Tipo de Registro</option>
                    {TIPOREGISTRO.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
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
                  <Form.Control
                    required
                    name="category"
                    as="select"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Tipo de Categoria</option>
                    {TIPOCATEGORIA.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
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
              <Form.Control
                required
                name="description"
                type="text"
                placeholder="Descrição do que foi feito"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group controlId="form">
            <Form.Label column sm="2">
              Valor
            </Form.Label>
            <Col sm="11">
              <Form.Control
                required
                name="expense"
                type="number"
                placeholder="Valor"
                onChange={(e) => {
                  register_type === "Despesa"
                    ? setExpense(-e.target.value)
                    : setExpense(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group controlId="form">
            <Form.Label column sm="2">
              Formato
            </Form.Label>
            <Col sm="11">
              <Form.Control
                required
                name="expense_type"
                as="select"
                onChange={(e) => setExpenseType(e.target.value)}
              >
                <option>Forma de Gasto</option>
                {TIPOPAGAMENTO.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.fecharModal}>
          FECHAR
        </Button>
        <Button variant="primary" onClick={handleCreateResgiter}>
          ADICIONAR
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};

export default FormModal;
