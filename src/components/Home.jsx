import HeaderComponent from "./Header";
import CardPizzaComponent from "./CardPizza";
import PropTypes from "prop-types";
import './Home.css'; // Asegúrate de tener los estilos CSS aplicados

const HomeComponent = ({ pizzas, onAddToCart }) => {
  return (
    <>
      <div className="content">
        <HeaderComponent />
        <div className="card-container">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="card-item">
              <CardPizzaComponent pizza={pizza} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
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
