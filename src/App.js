import logo from './logo.svg';
import './App.css';
import Navbigation from './Componant/Navbigation/Navbigation.js'
import Bg from './Componant/Bg/Bg';
import About from './Componant/About/About';
import Events from './Componant/Events/Events.js'
import G from './Componant/G/G.js';
import Form from './Componant/Form/Form'
import Organized from './Componant/Organized/Organized';
import Footer from './Componant/Footer/Footer';
import { FadeIn } from 'react-animated-components'
function App() {
  return (
    <div className="App">
    <Navbigation/>
    <Bg/>
    <About/>
   
    <Events/>
  
    <G/>
    <Form/>
    <Organized/>
    <Footer/>
    </div>
  );
}

export default App;
