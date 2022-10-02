import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import EmpleadoList from './components/EmpleadoList';

function App() {
  return (
    <Container className="pt-5 card">
      <h1 className="text-center text-primary">Lista De Empleados</h1>
      <hr></hr>
      <EmpleadoList></EmpleadoList>
    </Container>
     
  );
}

export default App;
