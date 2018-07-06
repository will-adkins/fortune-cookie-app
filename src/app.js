import React from 'react'
import style from './app.css.js'
import fortuneCookie from 'fortune-cookie'

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const getFortune = () => {
  return {
    fortune: fortuneCookie[getRandomInt(fortuneCookie.length - 1)]
  }
}

const App = ({ state, setState }) => {
  return (
    <div style={style.root}>
      <h1>Fortune Cookie App</h1>
      <h3 className="mh2 fw1 ba pa4 br2 bg-light-blue">Do you dare partake?</h3>
      <button style={style.button} onClick={() => setState(getFortune())}>
        Open a cookie
      </button>

      <div>
        {state.fortune ? (
          <p>{state.fortune}</p>
        ) : (
          <p className="instructions">Have you opened your cookie yet?</p>
        )}
      </div>
    </div>
  )
}

export default App
