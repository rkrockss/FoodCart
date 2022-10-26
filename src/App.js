import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Footer from './components/footer';
import Contact from './components/contact';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';


function App() {
  return (
  <>
   <Header />


   <Routes>
     <Route path='/' element={ <Cards />} />
     <Route path='/cart/:id' element={ <Protected>  <CardsDetails/>  </Protected> } />
   </Routes>


   




   <Contact/>

   <Footer/>
   
  </>
  );
}

export default App;
