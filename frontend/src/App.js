import "./App.css";
import { Button, Container } from "react-bootstrap";
import Header from './components/Header';
import TableInfo from './components/TableInfo';
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Button className="modal-button">Adicionar +</Button>
        <TableInfo />
      </Container>
    </div>
  );
}

export default App;
