import React from "react";
import { Table } from "react-bootstrap";

const TableInfo = (props) => {
  return (
    <Table responsive striped bordered hover size="sm" variant="light">
      <thead>
        <tr>
          <th>Data Realizada</th>
          <th>Registro</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Formato</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.data}</td>
          <td>{props.registro}</td>
          <td>{props.categoria}</td>
          <td>{props.descricao}</td>
          <td>{props.valor}</td>
          <td>{props.formato}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableInfo;
