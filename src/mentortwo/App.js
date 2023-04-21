import React from 'react'

function App() {


    function Counter() {
        const [count, setCount] = React.useState(0);

        React.useEffect(() => {
            console.log('Component did mount')
        }, [])
    
        const plus = () => {
        setCount(count + 1)
        }
    
        const minus = () => {
            setCount(count - 1)
            }
        
        return (
            <div>
            <h1>Counter: {count}</h1>
            {count === 5 && <h3 style={{color: 'red'}}>Это число пять!</h3>}
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            </div>
        )
    }



  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;
