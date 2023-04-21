import React from 'react'

function App() {
    let email;
    let password;

    function handleSubmit(event) {
        if (event.target.email.value === '') {
            alert('Заполните почту');
        } else if (event.target.password.value === '') {
            alert('Заполните пароль')
        } else if (event.target.email.value.trim().length === 0 || event.target.password.value.trim().length === 0) {
                alert('Пробелы недопустимы!')
        } else {
            let emailOrigin = event.target.email.value;
            let passwordOrigin = event.target.password.value;
            function hasWhiteSpace(s) {
                return /\s/g.test(s);
            }
            if (hasWhiteSpace(passwordOrigin) || hasWhiteSpace(emailOrigin)) {
                alert('Пробелы недопустимы!')
            } else {
                email = emailOrigin.replace(/\s/g, '');
                password = passwordOrigin.replace(/\s/g, '');
                console.log(email)
                console.log(password)
            }
        }
        // console.log(event)
        event.preventDefault();
    }

    function onChange(event) {
        if (event.target.id === 'email') {
            const emailTarget = event.target.value;
            if (emailTarget === '') {
                alert('Заполните почту')
            }
        } else if (event.target.id === 'password') {
            const passwordTarget = event.target.value;
            if (passwordTarget === '') {
                alert('Заполните пароль')
            }
        }
    }

  return (
    <div className="App">
        <h2>Tutorial-2</h2>
        <form action="" onSubmit={handleSubmit} onChange={onChange} id='form'>
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="email" name="email" placeholder='введите почту' id='email' />
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="password" name="password" placeholder='введите пароль' id='password' />
            <button type="submit">Войти</button>
        </form>
    </div>
  );
}

export default App;
