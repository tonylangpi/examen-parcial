import  { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import {Link}  from 'react-router-dom';
const Login = ({loguear}) => {
  const { 
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      correo: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [info, setInfo] = useState();
  const [show, setShow] = useState(false);
  const onSubmit = handleSubmit((data) => {
    setInfo(data);
    setShow(true);
    setTimeout(function(){
      loguear();
   }, 4000);
    reset();
  });
  
  const handleClose = () => setShow(false);

  return (
    <>
    <Card className="m-3" >
    <Card.Body>
      <Card.Title>LOGIN</Card.Title>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
            placeholder='abdcd@gmail.com'
          />
          {errors.correo && <span className='text-danger'>{errors.correo.message}</span>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Ingresa tu contraseña"
            {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 8,
              message: "Contraseña debe ser mayor a 8 caracteres",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)/,
              message: "La contraseña debe tener al menos un digito, una mayuscula y 8 caracteres",
            },
          })}
          />
           {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </Form.Group>
        <Form.Group>
        <Form.Check
            className="mt-2"
            type="checkbox"
            label="Mostrar contraseña"
            onChange={() => setShowPassword(!showPassword)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!isValid}>
          Iniciar Sesión
        </Button>
      </Form>
      <Link to="/registrar">REGISTRAR</Link>
    </Card.Body>
  </Card>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Bienvenido</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
          <p>TU CORREO ES {info?.correo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
