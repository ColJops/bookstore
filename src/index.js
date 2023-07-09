import React from 'react';
import ReactDOM from 'react-dom'
import Checkout from './pages/checkout/checkout';
<link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
crossorigin="anonymous"></link>

ReactDOM.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>,
  document.getElementById("root")
);
