import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardItem.css';


function CardItem(props) {
  return (
    <Card className="CardItem" >
      <Card.Img variant="top" src={props.item.pic} />
      <Card.Body>
        <Card.Title  class= "CardTitle">{props.item.name}</Card.Title>
        <Card.Text class= "CardText">
          <p>Categoria {props.item.category}</p><p>Precio ${props.item.price}</p>
        </Card.Text>
        <Button class="CardButton">Detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;