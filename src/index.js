import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import SectionAnimals from './sectionAnimals';
import Faq from './Faq';
import Contato from './Contato';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SectionAnimals />
    <Faq />
    <Contato />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
