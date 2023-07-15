import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/checkout/checkout';
import FormikCheckout from './pages/checkout/formikCheckout';
import Users from './pages/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />,
    <hr />
    <FormikCheckout />,
    <hr />
    <Checkout />
  </React.StrictMode>
)

