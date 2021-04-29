import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import TableInfo from "./components/TableInfo";
import FormModal from "./components/FormModal";
import DataContext  from './context/DataContext';
import api from './services/api';
import "./App.css";

function App() {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    async function loadData() {
      const {data} = await api.get("budget/");
      setRegisters(data);
    }

    loadData();
  }, []);

  const [showForm, setShowForm] = useState(false);
  
  const handleCloseFormModal = () => setShowForm(false);
  const handleFormModal = () => setShowForm(true);

  return (
    <DataContext.Provider value={{registers, setRegisters}}>
      <Container className="App">
        <Header />

        <Button className="buttons" variant="danger" href="accounts/logout">
          SAIR
        </Button>
        <Button className="buttons" variant="primary" onClick={handleFormModal}>
          ADICIONAR +
        </Button>
        <FormModal ativarModal={showForm} fecharModal={handleCloseFormModal} />

        <TableInfo />
      </Container>
    </DataContext.Provider>
  );
}

export default App;
