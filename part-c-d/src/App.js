import React, {useState} from 'react'

const Hello = (name, age) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
    return (
      <div>
        hello world
        <p>Hello {name} you are {age}.You were born in {bornYear()}</p>
      </div>
    );
  }
const App = () => {
  const [counter, setCounter] = useState(0)
  // setTimeout(
  //   () => setCounter(counter + 3), 2000
  // )
  const PlusClick = () => {
    console.log(counter)
  }
  function plus() {
    setCounter(counter + 1)
  } 
  // const name = 'shawn'
  // const age = 32
  return (
    <div>
      {/* <Hello name={name} age={age} /> */}
      {counter}
      {setCounter}
      <button onClick={PlusClick}>log</button>
      <button onClick={plus}>plus</button>
      <button onClick={() => setCounter(counter - 1)}>minus</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
      {/* <Hello name={'srs'} age={100000}/> */}
    </div>
  );
}

export default App;
