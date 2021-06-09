import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/pages/_app.scss';
import Nav from './components/Nav/Nav.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import Aboutme from './components/Aboutme/Aboutme.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Nav />
          <Inicio />
          <Aboutme />
          <Projects />
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
