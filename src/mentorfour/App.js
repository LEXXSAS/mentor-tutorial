import React from 'react'
import Card from './Card';

export const AppContext = React.createContext();

function App() {

    const [products, setProducts] = React.useState(['Картошка', 'Хлеб', 'Молоко']);

    const removeProduct = (index) => {
    if (window.confirm('Удалить продукт?')) {
        const newArr = products.filter((_, i) => index !== i);
        setProducts(newArr);
    }
    };

    const makeOrder = (index) => {
        alert(`Вы купили продукт #${index}`)
    };

  return (
    <div className="App">
        <h1>Корзина:</h1>
        <hr />
        <AppContext.Provider value={{removeProduct, makeOrder}}>
            {products.map((name, index) => (
                <Card key={name} name={name} index={index} />
            ))}
        </AppContext.Provider>
    </div>
  );
}

export default App;
