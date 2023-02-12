import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import ipReducer from "../src/store/ipSlice"
// import './index.css'

// const store = configureStore(
//   {
//     reducer: {
//       ipReducer: ipReducer
//     }
//   }
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}><App /></Provider>

<React.StrictMode>
  <App/>
</React.StrictMode>
)
