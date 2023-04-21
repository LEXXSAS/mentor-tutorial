import React from 'react'

function App() {
    const [count, setCount] = React.useState(0)
    const countRef = React.useRef();

    countRef.current = count;

    const inc = () => {
        setCount(count + 1)
        }

    const startTimer = () => {
        setInterval(() => {
            setCount(countRef.current + 1)
        }, 1000)
            }

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={startTimer}>interval</button>
    </div>
  );
}

export default App;
