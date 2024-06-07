
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BoutiqueCategory } from './Pages/BoutiqueCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Boutique } from './Pages/Boutique';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Boutique />} />
          <Route path='/hommes' element={<BoutiqueCategory category="hommes" />} />
          <Route path='/femmes' element={<BoutiqueCategory category="femmes" />} />
          <Route path='/enfants' element={<BoutiqueCategory category="enfants" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
