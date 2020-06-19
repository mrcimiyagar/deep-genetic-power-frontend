import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather';
import ManualDataInput from './pages/ManualDataInput';
import Calendar from './pages/Calendar';
import UserProfile from './pages/UserProfile';

function App() {
  let [currentPage, setCurrentPage] = useState('/');
  if (currentPage === '/') {
    return (<Login pageChangerHook={setCurrentPage}/>);
  }
  else if (currentPage === '/dashboard/admin') {
    return (<Dashboard pageChangerHook={setCurrentPage}/>);
  }
  else if (currentPage === '/dashboard/employee') {
    return (<UserProfile pageChangerHook={setCurrentPage}/>);
  }
}

export default App;
