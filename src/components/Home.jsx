import './Home.css';
import HeaderComponent from './Header';
import CardPizzaComponent from './CardPizza';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeComponent = () => {
  return (
    <>
      <div className="content">
        <HeaderComponent />
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <CardPizzaComponent
                nombre="Napolitana"
                precio={5950}
                ingredientes={["mozzarella", "tomates","albahaca" ,"jamón", "orégano"]}
                stocki="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
              />
            </Col>
            <Col xs={12} md={4}>
              <CardPizzaComponent
                nombre="Española"
                precio={6950}
                ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                stocki="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
              />
            </Col>
            <Col xs={12} md={4}>
              <CardPizzaComponent
                nombre="Pepperoni"
                precio={6950}
                ingredientes={["mozzarella", "pepperoni", "orégano","tomate"]}
                stocki="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeComponent;
