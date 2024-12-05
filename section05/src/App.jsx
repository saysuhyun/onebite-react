import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
    {/* 무조건 하나 띄어야되네 */}
      <Header /> 
      <Main />
      <Footer />
      <h1>안녕 리액트</h1>
    </>
  )
}

export default App;
