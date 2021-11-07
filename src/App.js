
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/context/AuthProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/Shared/PrivateRoute';

function App() {
  return (
    <div>
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
          <Home></Home>
       </Route>
       <Route exact path='/home'>
          <Home></Home>
       </Route>
       <PrivateRoute path='/service/:id'>
         <ServiceDetails></ServiceDetails>
       </PrivateRoute>
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
      <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
