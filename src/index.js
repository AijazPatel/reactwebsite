import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Apps from './Apps';
import './index.css';

ReactDom.render(
  <>
   
  <BrowserRouter>
  <Apps/>
  </BrowserRouter>
  </>,
  document.getElementById("root")
)