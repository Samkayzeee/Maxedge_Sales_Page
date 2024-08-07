import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';


const MainApp = React.lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <MainApp />
    </Suspense>
  </React.StrictMode>,
)
