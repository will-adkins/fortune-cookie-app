import React from 'react'
import style from './app.css.js'
import fortuneCookie from 'fortune-cookie'
import logo from './cooki.png'

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const getFortune = () => {
  return {
    fortune: fortuneCookie[getRandomInt(fortuneCookie.length - 1)]
  }
}

const App = ({ state, setState }) => {
  return (
    <div style={style.root}>
      <img height="100" src={logo} alt="fortune cookie logo" />
      <h1>Fortune Cookie App</h1>
      {state.fortune ? (
        <h3 className="mh2 fw1 ba pa4 br2 bg-gold">{state.fortune}</h3>
      ) : (
        <h3 className="mh2 fw1 ba pa4 br2 bg-gold">
          Eat a cookie to find your fortune!
        </h3>
      )}
      <button style={style.button} onClick={() => setState(getFortune())}>
        Open a cookie
      </button>
      <p className="instructions">Have you opened your cookie yet?</p>
    </div>
  )
}

export default App
