import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/checkout/checkout';
import FormikCheckout from './pages/checkout/formikCheckout';
import Users from './pages/Users';
import Add from './pages/Add';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
    <hr />
    <Add />
    <hr />
    <FormikCheckout />
    <hr />
    <Checkout />
  </React.StrictMode>
)

