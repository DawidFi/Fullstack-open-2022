import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
      </button>
  )
}


const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text} </td>
      <td> {props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = ((props.good - props.bad)/ props.counter)
  let positive = (props.good / props.counter)*100
  positive = Math.round((positive + Number.EPSILON) * 100) / 100
   if (props.counter === 0){
    return(
      <div>
        <h2>statistics</h2>
        <p>
          No feedback given
        </p>
      </div>
    )
  } else {
    return(
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text='Good' value={props.good} />
            <StatisticsLine text='Neutral' value={props.neutral} />
            <StatisticsLine text='Bad' value={props.bad} />
            <StatisticsLine text='All' value={props.counter} />
            <StatisticsLine text='Average' value={Math.round((average + Number.EPSILON) * 100) / 100} />
            <StatisticsLine text='Positive' value={positive +'%'} />
          </tbody>
        </table>
      </div>
    )
  }


  
}

const App = () =>{
  
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)
  

  const handleGoodClick = () =>{
    setGood(good + 1)
    setCounter(counter + 1)
  }
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
    setCounter(counter + 1)
  }
  const handleBadClick = () =>{
    setBad(bad + 1)
    setCounter(counter + 1)
  }
  
  
  return(
    <div>
      <h1>give feedback</h1>
      <br />
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      <br />
      <Statistics good={good} bad={bad} neutral={neutral} counter={counter} />
    </div>
  )
}

export default App;
