import React from 'react'
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

function App() {
    
    // массивы
    const arrOne = [
        "абсолютный",
        "адский",
        "азартный",
        "активный",
        "ангельский",
        "астрономический",
        "баснословный",
        "безбожный",
        "безбрежный",
        "безвозвратный",
        "безграничный",
        "бездонный",
        "бездушный",
        "безжалостный",
        "замечательно",
        "замечательный",
        "записной",
        "запредельный",
        "заядлый",
        "звериный",
        "зверский",
        "зеленый",
        "злой",
        "злостный",
        "значительный",
        "неоспоримый",
        "неотразимый",
        "неоценимый",
        "непередаваемый"
      ];

      const arrTwo = [
        "лгун",
        "день",
        "конь",
        "олень",
        "человек",
        "программист",
        "ребёнок",
        "конец",
        "город",
        "дурак"
      ];

      const [arrZero, setArrZero] = React.useState([]);

      // основная функция для генерации фраз
      const genPhrase = () => {
        // генерируем рандомное число по количеству длины массива минус 1
        const arrOneLength = arrOne.length - 1;
        const randNumberArrOne = Math.floor(Math.random() * arrOneLength);
        // чисел и данных из массива нужно два поэтому генерируем два разных числа
        const randNumberArrOneDouble = Math.floor(Math.random() * arrOneLength);
        // чтобы вырезать только одно значение из массива с помощью метода slice
        // нужен индекс следующего числа от того, который будем вырезать
        const forSliceEndNumber = randNumberArrOne + 1;
        const forSliceEndNumberTwo = randNumberArrOneDouble + 1;

        // делаем тоже самое для второго массива
        const arrTwoLength = arrTwo.length - 1;
        const randNumberArrTwo = Math.floor(Math.random() * arrTwoLength);
        const forSliceEndNumberArrTwo = randNumberArrTwo + 1;

        // вырезаем два значения из первого массива по индексу
        const onePhrase = arrOne.slice(randNumberArrOne, forSliceEndNumber);
        const onePhraseTwoWord = arrOne.slice(randNumberArrOneDouble, forSliceEndNumberTwo);

        // вырезаем одно значение из второго массива по индексу
        const twoPhrase = arrTwo.slice(randNumberArrTwo, forSliceEndNumberArrTwo);

        // объединяем вырезанные значения в один массив
        const finalPhrase = [...onePhraseTwoWord, ...onePhrase, ...twoPhrase];

        // передаем в конец пустого массива arrZero получившийся массив
        // при каждом нажатии кнопки действие повторяется
        // к массиву arrZero добавляется еще один массив
        setArrZero([...arrZero, finalPhrase]);

      }

      // при нажатии очистить очищаем массив
      const clearArr = () => {
       setArrZero([]);
      }


      // альтернативный вариант определения пустой ли массив 
      // для дальнейшего использования на отображении компонентов

      // const [isTrue, setIsTrue] = React.useState(true);

      // React.useEffect(() => {
      //   if (arrZero.length === 0) {
      //     setIsTrue(false);
      //   } else {
      //     setIsTrue(true);
      //   }
      // }, [arrZero])


  return (
    <div className="App">
    <div className="wrapper">

        {(arrZero.length === 0) ? <EmptyBlock/> : <div className="list">
        {arrZero.map((value) => {
          return <Phrase key={value} arrZero={value.join(' ')} />
        })}
        </div>}

        <button onClick={() => genPhrase()} className="btn btn_generate">Сгенерировать</button>
        <button onClick={() => clearArr()} className="btn btn_clear">Очистить</button>
    </div>
    </div>
  );
}

export default App;
