import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { Skills } from './Component/Skills';
import { Projects } from './Component/Projects';
// import { ProjectCard } from './Component/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
