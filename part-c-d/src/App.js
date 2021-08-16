
import React from 'react'

  const Hello = (p) => {
    return (
      <div>
        <p>Hello {p.name} you are {p.age }</p>
      </div>
    );
  }
function App() {
  const name = 'shawn'
  const age = 32
  return (
    <div>
      <Hello name={name} age={age} />
  
      <Hello name={'srs'} age={100000}/>
    </div>
  );
}

export default App;
