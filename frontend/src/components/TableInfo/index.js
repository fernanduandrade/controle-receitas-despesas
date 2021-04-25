import React, {useState, useEffect} from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

import api from '../../services/api';

const TableInfo = (props) => {
  const [financial, setFinancial] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      try {
        const response = await api.get();
        setFinancial(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadInfo();
  }, []);
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
        {financial.map(element => {
          return <tr key={element.id}>
            <td>{element.date}</td>
            <td>{element.register_type}</td>
            <td>{element.category}</td>
            <td>{element.description}</td>
            <td>R$ {element.expense}</td>
            <td>{element.expense_type}</td>
            <td>
              <Button variant="primary-outline"><FontAwesomeIcon icon={faTrash} color="#C43E36"/></Button>
            </td>
          </tr>
      })}
      </tbody>
    </Table>
  );
};

export default TableInfo;
