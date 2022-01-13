import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const mensaje = "Hola :-)";
  return (
    <>
    <NavBar/> 
    <ItemListContainer dato={mensaje}/>
    </>
  );
}

export default App;
