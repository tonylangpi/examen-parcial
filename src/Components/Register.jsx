//import  { useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      correo: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    reset();
  });
  return (
    <Card className="m-3" >
    <Card.Body>
      <Card.Title>REGISTRAR</Card.Title>
      <form onSubmit={onSubmit} >
      <Form.Group controlId="name">
          <Form.Label>NOMBRE</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
             {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
            placeholder="Ingresa tu nickname"
          />
          {errors.nombre?.type === "required" && <span className='text-danger' >Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span className='text-danger'>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span className='text-danger'>Nombre debe ser mayor a 2 caracteres</span>
        )}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="correo"
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
            name="password"
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
            placeholder="Ingresa tu contraseña"
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
           REGISTRAR
        </Button>
      </form>
    </Card.Body>
  </Card>
  )
}

export default Register