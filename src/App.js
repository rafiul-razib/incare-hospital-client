
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Band from './components/Band/Band';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
          <Home></Home>
       </Route>
       <Route exact path='/home'>
          <Home></Home>
       </Route>
       <Route path='/service/:id'>
         <ServiceDetails></ServiceDetails>
       </Route>
       <Route path='/contact'>
         <Contact></Contact>
       </Route>
       <Route path='/login'>
         <Login></Login>
       </Route>
       <Route path='/register'>
         <Register></Register>
       </Route>

     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
