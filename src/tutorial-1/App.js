import React from 'react'

function App() {

    function montoToStr(num) {
        return num > 12 || num < 1
          ? null
          :
           'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[num - 1];
      }

      class Profile2 extends React.Component {
        render() { 
            return (
            <div className='box'>
                <p>{this.props.children} <b>{this.props.name}!</b></p>
                <p>Дата регистрации: {this.props.registredAt.getDate()} {montoToStr(this.props.registredAt.getMonth())} {this.props.registredAt.getFullYear()}</p>
            </div>
            );
        }
      }

      function Profile(props) {
        /*
        console.log(props.registredAt.getFullYear()) // год из new Date
        console.log(props.registredAt.getDate()) // день из new Date
        console.log(props.registredAt.getMonth()) // месяц из new Date
        console.log(montoToStr(props.registredAt.getMonth())) // преобразуем месяц из числового формата в название месяца
        */

        return(
            <div className='box'>
                <p>{props.children} <b>{props.name}!</b></p>
                <p>Дата регистрации: {props.registredAt.getDate()} {montoToStr(props.registredAt.getMonth())} {props.registredAt.getFullYear()}</p>
            </div>
        )
      }

      Profile.defaultProps = {name: 'Noname'}

  return (
    <div className="App">
      <h2>Урок №1</h2>
      <Profile name="Вася" registredAt={new Date(2021, 5, 22)} >Привет,</Profile>
      <br />
      <Profile2 name="Петр" registredAt={new Date(2022, 4, 20)} >Привет,</Profile2>
    </div>
  );
}

export default App;
