import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { Skills } from './Component/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
