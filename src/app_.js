
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
const App = () => {
return(
  <>
  <div className='bg-primary'>testing bootstrap</div>
  <div className='container my container'>
  <div className='row'>
  <div className='col-md-3 text-center'>
  <div className='h1 text-primary'>
    4
  </div>
  <div className='text-sm'>day 5</div>
  </div>
  </div>

  </div>
  {/* <h6>react skill(0-10)</h6>
  <h1>{skillLevel}</h1>
  <button onClick={handleIncreaseval}>+</button>
  <button onClick={handleDecreaseval}>-</button>
  <button onClick={handleResetval}>reset</button> */}
  </>
  
) 
}
  
 
export default App;



//  const [skillLevel,setSkillLevel] = useState(0)
  //  const handleIncreaseval = () => {
  //   if (skillLevel < 10) {
  //     setSkillLevel(skillLevel + 1)
  //   }
  //  }
  //  const handleDecreaseval = () => {
  //   if (skillLevel > 0) {
  //     setSkillLevel(skillLevel - 1)
  //   }}
  //   const handleResetval = () => {
  //      setSkillLevel(0)

// return(
  // <>
  // <h6>react skill(0-10)</h6>
  // <h1>{skillLevel}</h1>
  // <button onClick={handleIncreaseval}>+</button>
  // <button onClick={handleDecreaseval}>-</button>
  // <button onClick={handleResetval}>reset</button>
  // </>
  
// )