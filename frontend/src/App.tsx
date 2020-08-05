import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';

import Routes from './routes/index';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
