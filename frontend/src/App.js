import { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import Header from './components/Header';
import TableInfo from './components/TableInfo';
import FormModal from './components/FormModal';


import "./App.css";
function App() {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
      <Container>
        <Header />
        <Button className="modal-button" onClick={handleShow}>ADICIONAR +</Button>
        <FormModal ativarModal={show} fecharModal={handleClose}/>
        <TableInfo />
      </Container>
    </div>
  );
}

export default App;
