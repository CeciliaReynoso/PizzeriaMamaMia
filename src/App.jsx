import './App.css';
import NavbarComponent from './components/Navbar';
import HomeComponent from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  
  return (
  <>
    <div className="container-fluid main-container">  
        <NavbarComponent />            
        {/* <Register /> */}
        <Login />
        {/* <HomeComponent /> */}
        <FooterComponent />
    </div>
   </> 
  );
}

export default App;
