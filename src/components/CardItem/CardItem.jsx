import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.pic} />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          <p>Categoria</p>{props.item.category}<p>Precio</p>{props.item.price}
        </Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;