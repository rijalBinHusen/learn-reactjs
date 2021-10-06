import logo from './logo.svg';
import './App.css';

function App() {
  const userLogged = "Rijal bin Husen"
  const userLoggedJSX = <strong>Rijal bin Husen JSX</strong>
  let a = 4;
  let b = 2;

  return (
    <div className="App">
      {userLogged}
      {userLoggedJSX}
      {a + b / 2}
    </div>
  );
}

export default App;
