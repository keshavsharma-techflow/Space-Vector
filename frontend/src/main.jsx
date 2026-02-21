import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import {ConFun} from "./context/Context.jsx";
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop />

  <ConFun >
       <App />
  </ConFun>

  </BrowserRouter>,
)
