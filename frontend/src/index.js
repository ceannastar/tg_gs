import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LargeImageCard from './components/LargeImageCard.js'
import InformationCardImage from './components/InformationCardImage.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{height: 400, display: 'flex', flexDirection: 'row'}}>
      <LargeImageCard />
      <LargeImageCard />
      <LargeImageCard />
    </div>
    <div style={{display: 'flex',flexDirection: 'column', margin: 40, justifyContent: 'center', alignItems: 'center'}}>
      <InformationCardImage />
      <InformationCardImage />
      <InformationCardImage />
    </div>
  </React.StrictMode>
);

reportWebVitals();
