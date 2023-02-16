import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ProductDetail.css';


function ProductDetail(props) {
  return (
    <Card className="CardItem" >
      <Card.Img variant="top" src={props.item.pic} />
      <Card.Body>
        <Card.Title  class= "CardTitle">{props.item.name}</Card.Title>
        <Card.Text class= "CardText">
          <p>Categoria {props.item.category}</p><p>Precio ${props.item.price}</p>
        </Card.Text>
        <Button>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;