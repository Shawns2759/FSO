import React from "react";
import ReactDOM from "react-dom";


const Header = ({course}) => {
  return <h1>{course.name}</h1>;
};

const Course = ({ course }) => {
  const { parts } = course
  const coursePart = parts.map((part) => {
    return <li><h3>{part.name} {part.exercises}</h3></li>
  })
  return (
    <div>
      <ul>
    {coursePart}
      </ul>
    </div>
  )
}

const Total = ({ course }) => {
  let {parts} = course


  let sum = parts.reduce((prev, current, index) => {
    console.log(prev, current.exercises, index);
    return prev + current.exercises
  },0)
  // let sum = 0
  // for (let i in parts) {
  //   sum += parts[i].exercises
  // }
  return (
    <div>
      Total Number of Assignments = {sum}
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Course course={course} />
      <Total course={course}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
