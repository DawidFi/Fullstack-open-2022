const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}
const Total = (props) => {
  return (
    <p>
      Total number of exercises: {props.exer1 + props.exer2 + props.exer3}
    </p>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.parts[1]}/>
      <Part part={props.parts[2]} exercise={props.parts[3]}/>
      <Part part={props.parts[4]} exercise={props.parts[5]}/>
    </div>
  )
}

const App = () =>{
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of compound'
  const exercises3 = 14

  const parts = [
    part1, exercises1, part2, exercises2, part3, exercises3
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total exer1 ={exercises1} exer2={exercises2} exer3 = {exercises3} />
    </div>
  )
}



export default App