import React from 'react'
import { useEffect, useState } from 'react';
import avatar2 from './assets/img/profile.png'
import axios from 'axios';
import useDebounce from './components/useDebounce';

function App() {
  const [info, setInfo] = useState({
    name: '',
    login: '',
    avatar_url: '',
    location: '',
    html_url: ''

  });
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 350);

  useEffect(() => {

    async function getUserInfo() {
      setLoading(true)
      try {
        const res = await axios.get(`https://api.github.com/users/${debouncedSearch}`);
        setInfo(res.data)
        window.localStorage.setItem('localinfo', JSON.stringify(res.data));
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    if (debouncedSearch) getUserInfo();
  }, [debouncedSearch])

  function handleSearchInfo(event) {
    event.preventDefault()
      setLoading(true)
      try {
        axios.get(`https://api.github.com/users/${search}`)
        .then((res) => {
          if (res.data.login !== 'null') {
            setInfo(res.data)
            window.localStorage.setItem('localinfo', JSON.stringify(res.data));
          }
        })
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
  }

    React.useEffect(() => {
      if (window.localStorage.getItem('localinfo') == null) {
        setInfo(info)
      } 
      return () => {
        if (window.localStorage.getItem('localinfo') !== '' || window.localStorage.getItem('localinfo') !== null) {
          const infoLocal = JSON.parse(window.localStorage.getItem('localinfo'))
          setInfo(infoLocal)
        }
      }
    }, [])


  // console.log(info)
  return (
      <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
          type="text"
          className="app-input"
          placeholder="Укажите GitHub-аккаунт"
          onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearchInfo} className="app-form_btn">Найти</button>
        </form>
        <div className="app-user">
          <div className="app-user_info">
            <div className="app-user_image">
              {info.login === '' ? <img src={avatar2} alt="" /> : <img src={info.avatar_url} alt="" />}
            </div>
            <div className="app-user_data">
              {info.name === '' ? <h1 className="app-user_name">Имя пользователя</h1> : null}
              {
               loading === true ? <h1 className="app-user_name">Загрузка...</h1> : <h1 className="app-user_name">
              {info.name}
                {/* <span>@archakov06</span> */}
              </h1> }
              {info.login === '' ? <p className="app-user_about">загрузка...</p>
              : <p className="app-user_about">{info.login}</p>}
              {/* {info.map((value) => {
                return <p key={value.id} className="app-user_about">{value.login}</p>
              })} */}
              {/* <p className="app-user_about">
                Frontend Developer. UI Designer. JavaScript ❤️ ReactJS ⚛ React Native, NodeJS, PHP
              </p> */}
            </div>
          </div>
          <ul className="app-user_stats">
            <li className="app-user_stats-item">
              Репозитории
              {info.login === '' ? <span>-</span> : <span>{info.public_repos}</span>}
            </li>
            <li className="app-user_stats-item">
              Подписчиков
              {info.login === '' ? <span>-</span> : <span>{info.followers}</span>}
            </li>
            <li className="app-user_stats-item">
              Звёзд
              <span>-</span>
            </li>
          </ul>
          <ul className="app-user_location">
            {info.location === '' ? <li className="app-user_location-item">загрузка...</li> : <li className="app-user_location-item">{info.location}</li>}
            <li className="app-user_location-item">
              {info.html_url === "https://github.com/null" ? <a href='#'>загрузка...</a> : <a href={info.html_url}>{info.html_url}</a>}
            </li>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default App;
