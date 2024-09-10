import { useState } from 'react';

function App() {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [result, setResult] = useState(0);

  const handleChange1 = (event) => {
    setVar1(Number(event.target.value));
  };

  const handleChange2 = (event) => {
    setVar2(Number(event.target.value));
  };

  const addition = () => {
    setResult(var1 + var2);
  };

  const subtraction = () => {
    setResult(var1 - var2);
  };

  const multiplication = () => {
    setResult(var1 * var2);
  };

  const division = () => {
    setResult(var2 !== 0 ? var1 / var2 : 'Cannot divide by zero');
  };

  const increment = () => {
    setResult(var1 + 1);
  };

  const decrement = () => {
    setResult(var1 - 1);
  };

  return (
    <>
      <h1>Simple Calculator</h1>
      <input 
        type='number'
        onChange={handleChange1}
        value={var1}
        placeholder='Enter a number1'
      />
      <input 
        type='number'
        onChange={handleChange2}
        value={var2}
        placeholder='Enter a number2'
      />
      <button onClick={addition}>Addition</button>
      <button onClick={subtraction}>Subtraction</button>
      <button onClick={multiplication}>Multiply</button>
      <button onClick={division}>Divide</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Result: {result}</p>
    </>
  );
}

export default App;
