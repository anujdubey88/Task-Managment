import React from 'react';
import './App.css';
import Addtodo from './components/addtodo';
import Elements from './components/elements';
import Welcome from './components/welcome';
import TodoitemcontextProvider from './store/tdoprovider';

function App()  {

    // const [todoitems,setTodoitem]=useState([]);

    
  return (
    <TodoitemcontextProvider>
      <h1 style={{textAlign:"center", marginTop:'5rem',marginBottom:'3rem'}}>TODO APP</h1>
      <Addtodo />
      {<Welcome></Welcome>}
      <Elements   ></Elements>
    </TodoitemcontextProvider>
  );
}

export default App;
