
import React from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}
const Part = ({ name, exercise }) => {
  return (
    <div>name:{name} exercise:{exercise}</div>
  )
}
const Content = ({parts}) => {
  let p = 0;
  for(p of parts){
    console.log(p.name )
  }
  return (
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercises} />
      <Part name={parts[1].name} exercise={parts[1].exercises} />
      <Part name={parts[2].name} exercise={parts[2].exercises} />
  
    </div>
  )
}

const App = () => {
  const name = {
    name: 'shawn',
    age: 34,
    greet:  (x)=>{
      console.log('hello', x, name.name)
    }
  }
  const course = {
    name: 'Half Stack application development',
    parts: [
     {
        name: 'Fundamentals of React', 
        exercises: 10
      },
      {
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        name: 'State of a component', 
        exercises: 17
      }
    ]
  }


  const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto.greet.bind(arto), 1000)


  return (
    <div>
      {name.greet('srs')}
      <Header name={course.name} />
      <Content parts={course.parts} />

    </div>
  )
}

export default App;
