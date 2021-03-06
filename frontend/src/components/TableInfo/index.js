import React, { useContext} from "react";
import { Table, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import DataContext from '../../context/DataContext';
import formartDate from "../../utils/formatDate";
import "./style.css";

const TableInfo = () => {

  const {registers, setRegisters} = useContext(DataContext);

  const deleteRegister = (id) => {
    try {
      api.delete(`budget/${id}/`).then((response) => {
        const deleteRegister = registers.filter((register) => {
          return id !== register.id;
        });

        setRegisters(deleteRegister);

        if (response.status === 204) {
          toast.info("Registro deletado.");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Table
      responsive
      striped
      bordered
      hover
      size="sm"
      variant="light"
      style={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}
    >
      <thead>
        <tr className="text-center">
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
        {registers.length > 0 ? (
          registers
            .sort((date1, date2) => date2.id - date1.id)
            .map((element) => {
              const {
                id,
                date,
                register_type,
                category,
                description,
                expense,
                expense_type,
              } = element;
              return (
                <tr key={id} className="text-center">
                  <td>{formartDate(date)}</td>
                  <td
                    className={
                      register_type === "Receita"
                        ? "receita-text"
                        : "despesa-text"
                    }
                  >{register_type}</td>
                  <td>{category}</td>
                  <td>{description}</td>
                  <td>
                    <b
                      className={
                        register_type === "Despesa" ? "expense-negative" : ""
                      }
                    >
                      R$ {expense}
                    </b>
                  </td>
                  <td>{expense_type}</td>
                  <td>
                    <Button
                      onClick={() => deleteRegister(id)}
                      variant="primary-outline"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        color="#C43E36"
                        transform="up-5 grow-2.5"
                      />
                    </Button>
                  </td>
                </tr>
              );
            })
        ) : (
          <tr>
            <td className="text-center" colSpan="75%">
              Sem registros
            </td>
          </tr>
        )}
      </tbody>
      <ToastContainer />
    </Table>
  );
};

export default TableInfo;
