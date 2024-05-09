import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['Sakib', 'Tom', 'Emma', 'Raj']

  const singers = [
    { id: 1, name: "Sharif", age: 30 },
    { id: 2, name: "Raj", age: 40 },
    { id: 3, name: "Cruise", age: 60 },
  ]

  const incrCount = () => {
    const neCount = count + 1;
    setCount(neCount);
  }

  return (
    <>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <button onClick={incrCount}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile"></Device>
      <Person></Person>
      <Student grade="5" score="250"></Student>
      <Student></Student>
      <Developer></Developer>
      <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Core Concepts' isDone={false}></Todo>
      <Todo></Todo>
      <Actor name={'Bappa'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Users></Users>

      <Friends></Friends>
    </>

  )
}

function Device(props) {
  console.log(props)
  return (<h2>This device name: {props.name} price: {props.price}</h2>)
}

function Person() {
  const age = 25;
  const person = { name: 'sakib', age: 20 }
  return <h3>I am a {person.name} with age: {age}</h3>
}
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is Student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}
function Developer() {
  const develoeperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={develoeperStyle}>
      <h5>This is Developer</h5>
      <p>Devo devo</p>
      <p>Code:</p>
    </div>
  )
}

export default App
