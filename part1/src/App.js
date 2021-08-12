
import React from 'react'

const Header = (props) => {
  return (
    <h1>{ props.name }</h1>
  )
}
const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const arr = [
    part1, part2, part3
  ]
  let showArr = []
  for (let a = 0; a < arr.length; a++){
    console.log(a, arr[a])
    let rtr = <h1>Exercise {a + 1}: {arr[a]}</h1>
    showArr.push(rtr)
  }
  return (
    <div>
      {showArr}
      {/* <h1>Exercise: {part1}</h1>
      <h1>Exercise: {part2}</h1>
      <h1>Exercise: {part3}</h1> */}
    </div>
  )
}
const Total = (props) => {
  return (
    <div>

    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content />
      <Total/>
      {/* <p>{part1} : {exercises1}</p>
      <p>{part2} : {exercises2}</p>
      <p>{part3} : {exercises3}</p> */}
    </div>
  )
}

export default App;
