import HeaderComponent from "./Header";
import CardPizzaComponent from "./CardPizza";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

const HomeComponent = ({ pizzas, onAddToCart }) => {
  return (
    <>
      <div className="content">
        <HeaderComponent />
        <Container >
        <Row >
          {pizzas.map((pizza) => (
            <Col key={pizza.id} xs={12} md={4}>
              <CardPizzaComponent pizza={pizza} onAddToCart={onAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </>
  );
};

HomeComponent.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default HomeComponent;
