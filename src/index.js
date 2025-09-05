import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Component/Navbar';
import ContactUs from './Component/ContactUs';
import AboutUs from './Component/AboutUs';
import Product from './Component/Product';
import Home from './Component/Home';
import Login from './Component/Login';
import Reg from './Component/Reg';
import Error from './Component/Error';
import ThemeProvider from './Context/ThemeContext';
import Productdet from './Component/Productdet';

const router = createBrowserRouter([
   {
      path : '/',
      element: <Navbar />,
      errorElement: <Error/>,
      children:[
          {
            index: '/home',
            element: <Home />
         },
         {
            path: '/home',
            element: <Home />
         },
         {
            path: '/about',
            element: <AboutUs />
         },
         {
            path: '/contact',
            element: <ContactUs />
         },
          {
            path: '/login',
            element: <Login />
         },
         {
            path: '/reg',
            element: <Reg />
         },
         {
            path: '/product',
            element: <Product />
         },
          {
            path: '/proddet/:pid',
            element: <Productdet />
         },

      ]

   }
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ThemeProvider>
   <RouterProvider router={router} />
 </ThemeProvider>
       
);


reportWebVitals();
