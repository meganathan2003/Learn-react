import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './components/Car';
import Garage from './components/Garage';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './components/FavouriteColor';

// // Create a sample component
// function Car() {
//   return (
//     <h2>Hello, This is Car</h2>
//   )
// }


// Create a Garage component
// function Garage() {
//   return(
//     <div>
//       <h1>Who Lives inside my Garage ?</h1>
//     {/* ans car */}
//     <Car/>
//     </div>
//   )
  
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Garage/> */}
    {/* <Header></Header> */}
    <FavoriteColor/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
