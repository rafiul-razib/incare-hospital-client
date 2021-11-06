
import './App.css';
import About from './components/About/About';
import Band from './components/Band/Band';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <About></About>
     <Band></Band>
     <Services></Services>
     <Footer></Footer>
    </div>
  );
}

export default App;
