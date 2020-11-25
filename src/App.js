import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Hello';
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from './components/Counter';
import Parent from './components/Parent';
import Greetings from './components/Greetings';
import ListRender from './components/ListRender';
import StyleSheet from "./components/Stylesheet"
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import DemoFrag from './components/DemoFrag';
import List from "./components/List";
function App() {
  return (
    <div className="App">
      {/* <DemoFrag />
      <LifeCycleA />
      <ListRender />
      <Welcome name="Munad" profession="programmer" />
      <Message />
      <Counter />
      <Form />
      <Parent />
      <Greetings />
       <Greet name="Munad" profession="programmer" />
      <StyleSheet /> */}
      <List />
    </div>
  );
}

export default App;
