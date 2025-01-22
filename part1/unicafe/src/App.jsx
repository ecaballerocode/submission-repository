import { useState } from 'react'

//Componente para los botones
const Button = ( {onClick, text}) => {
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

//Componente para cada linea de estadisticas
const StatisticLine = ( {text, value} ) => {
  return(
    <div>
      <tr>
        <td>{text}: </td>
        <td>{value}</td>
      </tr>
    </div>
  )
}


//Componente para las estadisticas
const Statistics = ({ good, neutral, bad, average }) => {

  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={good + neutral + bad} />
      <StatisticLine text="Average" value={average / (good + neutral + bad)} />
      <StatisticLine text="Positive" value={`${good / (good + neutral + bad) * 100}%`} />
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAverage(average + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good"/>
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <h1>Statistics</h1>
      {good + neutral + bad === 0 ? <p>No feedback given</p>
        : <Statistics good={good} neutral={neutral} bad={bad} average={average} />
      }
    </div>
  )
}

export default App