import React, { useState} from 'react'
import styles from './App.module.css';
import Product from "./Product";

function App() {
  

  // const [count, setCount] = useState(0)

  // const increment = () => {
  //   setCount(count + 1)
  // }
  // const decrement = () => {
  //   setCount(count -1)
  // }
  return (
    <div>
      <h1>Hello world</h1>

      <Product 
        name="Amazon Echo" 
        description="Your AI assistant" 
        price={19.99}
      /> 
      <Product 
        name="Samsung TV" 
        description="Your official google AI assistant" 
        price={299.99} 
      /> 
      <Product 
        name="Apple iPhone 12" 
        description="Your AI assistant" 
        price={1200} 
      /> 


      {/* <div>
        <li className="list">Hii</li>
        <li className="list"></li>
        <li className="list"></li>
      </div>

      <div>
        <p>It's a Counter.</p>
        <p>and the count is {count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button> 

      </div>*/}
    </div>
    
  );
}

export default App;
