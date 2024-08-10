import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './CardPizza.css';

function CardPizzaComponent({ nombre, precio, ingredientes, stocki }) {
  let formatter = new Intl.NumberFormat('es-cl', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  let nuevoFormatted = `Precio: $ ${formatter.format(precio)}`;

  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={stocki} className="pizza-image" />
      <Card.Body>
        <Card.Title className="text-center">{nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="ingredients-item">
          <h6 className="text-center">Ingredientes:</h6>
          <p className="text-center ingredients-list">🍕 {ingredientes.join(', ')}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3 className="text-center">{nuevoFormatted}</h3>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-outline-dark">👀 Ver más</button>
            <button type="button" className="btn btn-dark">Añadir 🛒</button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPizzaComponent;
