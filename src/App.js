import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';

function App() {
  let [currentPage, setCurrentPage] = useState('/');
  if (currentPage === '/') {
    return (<Login pageChangerHook={setCurrentPage}/>);
  }
  else if (currentPage === '/dashboard/admin') {
    return (<Dashboard pageChangerHook={setCurrentPage}/>);
  }
  else if (currentPage === '/dashboard/employee') {
    return (<Weather pageChangerHook={setCurrentPage}/>);
  }
}

export default App;
