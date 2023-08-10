
import Card from 'react-bootstrap/Card';
import UMG from '../assets/umg.png';
const Home = () => {
  return (
    <Card>
    <Card.Header>HOME</Card.Header>
    <Card.Img variant="top" src={UMG}/>

    <Card.Body>
      <Card.Title>EXAMEN PARCIAL UMG</Card.Title>
      <Card.Text>
        ANTHONY ERNESTO LANG PIÑEIRO CARNE 0906-20-10896
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Home