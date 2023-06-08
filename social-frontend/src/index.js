import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './sidebar';
import Smallsidebar from './smallsidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor=persistStore(store)

root.render(

  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
  <div className='min'>
    <App />
    <div className='sidee'><Smallsidebar /></div>
    </div>
    </BrowserRouter>
    </PersistGate>
    </Provider>
);

reportWebVitals();