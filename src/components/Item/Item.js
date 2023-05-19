import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="bottom" src={product.image} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <Card.Text>${product.precio}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
