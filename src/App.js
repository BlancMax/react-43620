import './App.css';
import NavBarapp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarapp />
        <ItemListContainer greeting={"Bienvenidos a Cerveceria Mil Nueve 86"} />
        <CartWidget />
      </header>
      
    </div>
  );
}

export default App;
