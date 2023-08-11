import { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
const Salarios = () => {
   //const [sueldo, setSueldo] = useState(0); 
   const [sueldosCalculados, setSueldosCalculados] = useState([]); 
   const [procedimientos, setProcedimientos] = useState({
    salario: 0,
    aumento: 0,
    descuento: 0,
    descuentoIgss: 0,
    total: 0
  })
   const handledChanged = (e) =>{
    e.preventDefault();
    setProcedimientos({
      ...procedimientos,
      [e.target.name]: parseFloat(e.target.value) 
    })
    
}
   const [igss, setIgss] = useState(0.0483);
   const [msg, setMsg] = useState("");
   const [show, setShow] = useState(false);
   const handleClose = () =>{
    setShow(false);
    setSueldosCalculados([...sueldosCalculados, procedimientos]);
   } 
   const calculos = () => {
       if(!procedimientos.salario || !procedimientos.aumento || !procedimientos.descuento){
        setMsg("el sueldo debe ser mayor a 0");
       } else {
        let cuotaLaboral = procedimientos.salario * igss;
        procedimientos.descuentoIgss = cuotaLaboral;
        let menosCuotaLaboral = procedimientos.salario - cuotaLaboral;
        let masAumento = menosCuotaLaboral + procedimientos.aumento;
        let menosDecuento = masAumento - procedimientos.descuento;
        procedimientos.total = menosDecuento; 
             setMsg(`El sueldo calculado total es: Q.${menosDecuento}`);
             setTimeout(function(){
             setShow(true)
          }, 2000);
       }
   }
  return (
    <>
      <Card className="m-3" style={{ width: "15rem" }} >
        <Card.Body>
          <Card.Title>SUELDOS</Card.Title>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>INGRESE SUELDO</Form.Label>
                <Form.Control type="number" name="salario"  onChange={(e) => handledChanged(e)} />
                <Form.Label>INGRESE DESCUENTO VARIABLE</Form.Label>
                <Form.Control type="number" name="descuento" onChange={(e) => handledChanged(e)} />
                <Form.Label>INGRESE AUMENTO</Form.Label>
                <Form.Control type="number" name="aumento" onChange={(e) => handledChanged(e)} onKeyUp={calculos} />
              </Form.Group>
            </Form>
        </Card.Body>
      </Card>
      <h5>REGISTROS</h5>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>SALARIO INGRESADO</th>
          <th>AUMENTO INGRESADO</th>
          <th>DESCUENTO INGRESADO</th>
          <th>DESCUENTO IGSS</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
      {
        sueldosCalculados.map((row,index) => (
          <tr key={index}>
          <td>{row.salario}</td>
          <td>{row.aumento}</td>
          <td>{row.descuento}</td>
          <td>{row.descuentoIgss}</td>
          <td>{row.total}</td>
        </tr>
          ))
      }
       
      </tbody>
    </Table>
      {
        msg && ( <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Detalles del calculo del sueldo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
        <p>
        SUELDO ORIGINAL : Q {procedimientos.salario} ,
      </p>
      <p>
        IGSS : 4.83% sobre sueldo ,
      </p>
      <p>
        AUMENTO INGRESADO : Q {procedimientos.aumento} ,
      </p>
      <p>
        DESCUENTO INGRESADO : Q {procedimientos.descuento} ,
      </p>
      <p className="font-weight-bold">
        {msg}
      </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>)
      }
    </>
  );
};

export default Salarios;