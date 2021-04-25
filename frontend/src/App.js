import { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import Header from './components/Header';
import TableInfo from './components/TableInfo';
import FormModal from './components/FormModal';
import BalanceModal from './components/BalanceModal';

import api from './services/api';

import "./App.css";
function App() {
 
  const [showForm, setShowForm] = useState(false);
  const [balanceForm, setBalanceForm] = useState(false);
  
  const handleCloseFormModal = () => setShowForm(false);
  const handleFormModal = () => setShowForm(true);

  const handleBalanceForm = () => setBalanceForm(false);
  const handleCloseBalanceForm = () => setBalanceForm(true);


  return (
    <div className="App">
      <Container>
        <Header />
        
        <Button className="modal-button" onClick={handleFormModal}>ADICIONAR +</Button>
        <Button className="modal-button" onClick={handleCloseBalanceForm}>ALTERAR SALDO +</Button>

        <BalanceModal ativarModal={balanceForm} fecharModal={handleBalanceForm} />
        <FormModal ativarModal={showForm} fecharModal={handleCloseFormModal}/>
        <TableInfo />
      </Container>
    </div>
  );
}

export default App;
