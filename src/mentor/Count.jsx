    import React from 'react'

function Count (props) {

    React.useEffect(() => {
        console.log('ComponentDidMount');
        return () => {
            console.log('КОМПОНЕНТ БЫЛ УДАЛЕН')
        }
    }, []);

    return (
         props.number.map((value, index) => <li key={index}>{value}</li>)
    );
}

export default Count ;
