import './App.css';
import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';
import HomeComponent from './components/Home';
import pizzaCart from './data/pizzas'; // Se utilizó el archivo existente en la plataforma de DL

const App = () => {
  // Leer carrito de localStorage o usar un array vacío si no hay nada guardado
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (pizza) => {
    setCart(prevCart => {
      const pizzaInCart = prevCart.find(item => item.id === pizza.id);
      if (pizzaInCart) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const handleIncreaseQuantity = (id) => {
    setCart(prevCart => prevCart.map(pizza =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCart(prevCart => prevCart
      .map(pizza =>
        pizza.id === id
          ? { ...pizza, quantity: Math.max(pizza.quantity - 1, 0) }
          : pizza
      )
      .filter(pizza => pizza.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);
  };

  return (
    <div>
      <NavbarComponent total={getTotal()} />
      <HomeComponent pizzas={pizzaCart} onAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
      <Footer />
    </div>
  );
};

export default App;
