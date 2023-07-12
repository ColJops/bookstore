import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/checkout/checkout';
import FormikCheckout from './pages/checkout/formikCheckout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormikCheckout />,
    <hr />
    <Checkout />
  </React.StrictMode>
)

