import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'
import Button from "./components/Button"; 

function App() {

  const buttonProps = {
    text:"mail",
    color:"red",
    a:1,
    b:2,
    c:3,
  }

  return (
    <>
    {/* 스프레드로 props 보내주기 */}
    <Button  {...buttonProps}/>
    <Button text={"카페"}/>
    <Button text={"블로그"}> 
      <div>Chidlren</div>
    </Button>

    </>
  )
}

export default App;
