import React from 'react'

const GreatestNum = ({nums}) => {
  let total = 0
  for (let n in nums) {
    total += nums[n]
  }
  console.log(total + 'total');


  let evenNums = nums.filter((num) => {
    return num % 2 == 0 
  })
  console.log(evenNums);
  
  function showNums(set) {
    let nums = set.map((num, i) => {
      return num + ', '
    })
    return nums
  }


  
  return (
    <div>
      addition of {showNums(nums)} = {(total)} 
      evens in {nums} = {showNums(evenNums)} 
     

    </div>
  )
}


const App = ({notes, nums}) => {


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <GreatestNum nums={nums}/>
    </div>
  )
}

export default App;
