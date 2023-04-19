import React from 'react'

function App() {
    const tabs = [
        {
            id: 1,
            title: 'Сколько всего мест в доме?',
            description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!',
        },
        {
            id: 2,
            title: 'Самая дорогая квартира?',
            description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.',
        },
        {
            id: 3,
            title: 'Могу ли я отменить бронирование?',
            description: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
        },
        {
            id: 4,
            title: 'Можно ли купить квартиру?',
            description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.',
        },
    ];

    const [tab] = React.useState(tabs);
    const [activeId, setActiveId] = React.useState(null); 
    const tabRef = React.useRef();


    const addActive = (id) => {
        setActiveId(id)
    }
    
    
    const Obt = ({value}) => {
                return (
                    <div ref={tabRef} className="app-tabs">
                        <div className={activeId === value.id ? 'tab active' : 'tab'}>
                        <input id={value.id} type="checkbox" name="tabs" />
                        <label onClick={() => addActive(value.id)} htmlFor={value.id}>{value.title}</label>
                        <div className="tab-content">
                            <p>
                            {value.description}
                            </p>
                        </div>
                        </div>
                    </div>
                )
            }

    let finalTab = tab.map((value, index) => (
        <Obt  key={index} value={value} />
    ));

  return (
    <div className="App">
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
        {finalTab}
        </div>
        

        </div>
      </div>
    </div>
  );
}

export default App;
