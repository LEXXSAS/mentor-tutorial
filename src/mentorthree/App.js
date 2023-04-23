import React from 'react'

function App() {
    
    const Students = ({label, onMove}) => {
        const [items, setItems] = React.useState([]);
        const [inputValue, setInputValue] = React.useState('');
        // const array = Object.keys(items);

        const handleClickAdd = () =>  {
            setItems((prev) => [...prev, inputValue]);
            setInputValue('');
        };

        const handleClickMove = () => {
            if (onMove) {
                onMove(items);
                setItems([]);
            }
        }

        return (
            <div className="input-block">
                <p>{label}</p>
                {items.map((str) => (
                    <li key={str}>{str}</li>
                ))}
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter text' />
                <button onClick={handleClickAdd}>Добавить</button>
                <div>
                    <button onClick={handleClickMove}>Переместить</button>
                </div>
            </div>
        )
    }
    const [mainList, setMainList] = React.useState([]);

    const onMoveStudents = (arr) => {
        setMainList([...mainList, ...arr]);
    }

  return (
    <div className="App">
        <Students label="Группа 1" onMove={onMoveStudents} />
        <Students label="Группа 2" onMove={onMoveStudents} />
        <Students label="Группа 3" onMove={onMoveStudents} />
        <br/>
        <hr/>
        <h2>Полный список:</h2>
        <ul>
            {mainList.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
