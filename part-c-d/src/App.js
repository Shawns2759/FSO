import React, {useMemo, useState} from 'react'

const Hello = ({name, age}) => {
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
const Display = ({counter}) => {
  return (
    <div>
      {counter} 
    </div>
    )
}
const Button = ({math, text}) => {
  return (
    <div>
      {console.log(math, text)}
      debugger
      <button onClick={math}>{text}</button>
  </div>
    
    )
  }
const App = (props) => {
  const [counter, setCounter] = useState(0);

  // const sub = () => setCounter(props.counter - 1)
  const math = {
    add: {
      func: () => setCounter(counter + 1),
      text: 'add'
    } ,
    sub: {
      func: () => setCounter(counter - 1),
      text: 'subtract'
    },
    mult: {
      func: () => setCounter(counter * 10),
      text: 'multply'
    },
    div: {
      func: () => setCounter(counter / 10),
      text: 'divide'
    }
  }

  const PlusClick = () => {
    console.log(counter)
  }
  function plus() {
    setCounter(counter + 1)
  } 

  return (
    <div>
      <Hello name={'srs'} age={100000} />
      <div>
        <Display counter={counter} setCounter={setCounter} />
        <span>
          <Button counter={counter} setCounter={setCounter} text={math.add.text} math={math.add.func} />
        </span>
        <span>
          <Button counter={counter} setCounter={setCounter} text={math.sub.text} math={math.sub.func} />
        </span>
        <span>
        <Button counter={counter} setCounter={setCounter} text={math.mult.text} math={math.mult.func} />
        </span>
        <span>
        <Button counter={counter} setCounter={setCounter} text={math.div.text} math={ math.div.func}/>
        </span>

        {props.c}
      </div>
    </div>
  );
}

export default App;
