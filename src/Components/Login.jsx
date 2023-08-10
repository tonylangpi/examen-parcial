import  { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica de campos
    const newErrors = {};
    if (!email) newErrors.email = 'El correo electrónico es obligatorio.';
    if (!password) newErrors.password = 'La contraseña es obligatoria.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Aquí puedes implementar la lógica de autenticación
      console.log('Iniciando sesión...');
    }
  };
  return (
    <>
    <Card className="m-3" >
    <Card.Body>
      <Card.Title>LOGIN</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Check
            className="mt-2"
            type="checkbox"
            label="Mostrar contraseña"
            onChange={() => setShowPassword(!showPassword)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Card.Body>
  </Card>
    </>
  );
};

export default Login;
