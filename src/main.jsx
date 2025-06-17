import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import Service from './page/Service.jsx';
import Contact from './page/Contact.jsx';
import ViewProduct from './page/ViewProduct.jsx';
import AddAccount from './page/AddAccount.jsx';
import CartForm from'./page/CartForm.jsx';

import './index.css';

import { CartProvider } from './store/CartContext';
import { ProductProvider } from './store/ProductContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide Cart and Product Contexts globally */}
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
              <Route path="view" element={<ViewProduct />} />
              <Route path="account" element={<AddAccount />} />
              <Route path="cart" element={<CartForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);
