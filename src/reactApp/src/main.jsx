import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import myicon from "./assets/master.png";
import master_img from "./assets/img.png";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <head>
            <title>ProletarianFood</title>
            <a className="navbar-brand" href="#">
                <img src={master_img} width="30" height="30"
                     className="d-inline-block align-top" alt=""/>
                ProletarianFood
            </a>
      </head>
    <App/>
  </StrictMode>,
)
