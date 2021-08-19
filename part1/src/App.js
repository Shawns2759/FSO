
import { React, useState } from 'react'

const Button = ({text, func}) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

const Display = ({goodCount, all, neturalCount, badCount}) => {
  return (
    <div>
      <h1>Statistics</h1>
          <div>
          Good:{goodCount}
          </div>
          <div>
          Bad:{badCount}  
          </div>
          <div>
          Netural:{neturalCount}
          </div>
          <div>
          All:{all}
          </div>
    </div>
  )
}
const Stats = ({goodCount, all, neturalCount, badCount}) => {
  if (!all) {
    return (
      <div>
       No FeedBack Given
      </div>
    )
  }
  return (
    <div>
      <Display goodCount={goodCount} all={all} badCount={badCount} neturalCount={neturalCount}/> <br/><br/>
      <div>
      <span>Good:</span><span>{(goodCount / all * 100)}%</span>
      </div>
      <div>
      <span>Bad:</span><span>{Math.abs(badCount/all * 100)}%</span>
      </div>
      <div>
      <span>Netural:</span><span>{(neturalCount/all * 100)}%</span>
      </div>
    </div>
 )
}
const App = () => {

  let [ goodCount, setGood] = useState(0);
  let [ neturalCount, setNetural] = useState(0);
  let [ badCount, setBad ] = useState(0);
  let all = Math.abs(badCount) + goodCount + neturalCount
  return (
    <>
      <div>
        Good:{goodCount}  Bad:{badCount}  Netural:{neturalCount}  All:{all}
        <Button text='plus' func={() => setGood(goodCount + 1)} />
        <Button text='Bad' func={() => setBad(badCount - 1)} />
        <Button text='Netural' func={() => setNetural(neturalCount + 1)} />
        <div>
    
          <div>
            <Stats goodCount={goodCount} all={all} badCount={badCount} neturalCount={neturalCount}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
